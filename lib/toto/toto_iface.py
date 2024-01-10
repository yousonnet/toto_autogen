from typing import Protocol, TypedDict, Optional


class follower_data(TypedDict):
    follower_username: str
    follower_list_name: Optional[str]
    follower_bio: Optional[str]
    follower_location: Optional[str]
    follower_website: Optional[str]
    follower_userid: int
    follower_num_friends: int
    follower_num_followers: int
    follower_num_tweets: int
    follower_last_tweet: Optional[str]
    follower_creation_date: str
    follower_last_checked: str


class user_metadata(TypedDict):
    username: str
    list_name: Optional[str]
    bio: Optional[str]
    location: Optional[str]
    website: Optional[str]
    userid: int
    num_friends: int
    num_followrs: int
    num_tweets: int
    last_tweet: Optional[str]
    last_checked: str


class following_item_data(user_metadata):
    creation_date: str
