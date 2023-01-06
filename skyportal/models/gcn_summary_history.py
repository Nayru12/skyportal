__all__ = ['GcnSummaryHistory']
import sqlalchemy as sa
from sqlalchemy.orm import relationship
from sqlalchemy.orm import deferred
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.ext.hybrid import hybrid_property

import gcn
import lxml

from baselayer.app.models import Base, DBSession, AccessibleIfUserMatches

class GcnSummaryHistory(Base):
    """Save the summary of the event in the history"""
 
    dateobs = sa.Column(
        sa.ForeignKey('gcnevents.dateobs', ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    sent_by_id = sa.Column(
        sa.ForeignKey('users.id', ondelete='CASCADE'),
        nullable=False,
        index=True,
        doc="The ID of the User who created this summary.",
    )

    # group_id = sa.Column(
    #     sa.ForeignKey("groups.id", ondelete="CASCADE"),
    #     nullable=False,
    #     index=True,
    #     doc="ID of the Event's Group.",
    # )
    # group = relationship(
    #     "Group",
    #     foreign_keys=[group_id],
    #     back_populates="gcnsummaryhistorys",
    #     doc="The Event's group",
    # )



    