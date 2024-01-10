from typing import TypedDict, Optional, List, Literal


class SearchedItem(TypedDict):
    uuid: str
    title: str
    author_name: str
    show_time: str
    type: Literal[1, 2, 3]
    source_url: str
    abstract: str
    tags: List[str]


class Opinion(TypedDict):
    uuid: str
    comment: str
    author_name: str
    show_time: str


class Tag(TypedDict):
    tag_name: str


class DetailItem(TypedDict):
    uuid: str
    title: str
    abstract: str
    type: Literal[1, 2, 3]
    show_time: str
    content: Optional[str]
    opinion: List[Opinion]
    tags: List[Tag]
