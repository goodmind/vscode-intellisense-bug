export interface IMtpVector<T> {
    list: T[];
}
type double = number;
type long = number;
type bytes = any;
export interface BoolFalse {
    _typeName?: "Telegram.type.BoolFalse";
}
export interface BoolTrue {
    _typeName?: "Telegram.type.BoolTrue";
}
export type TMtpBool = BoolFalse | BoolTrue;
export interface True {
    _typeName?: "Telegram.type.True";
}
export type TMtpTrue = True;
export interface Error {
    _typeName?: "Telegram.type.Error";
    code: number;
    text: string;
}
export type TMtpError = Error;
export interface Null {
    _typeName?: "Telegram.type.Null";
}
export type TMtpNull = Null;
export interface InputPeerEmpty {
    _typeName?: "Telegram.type.InputPeerEmpty";
}
export interface InputPeerSelf {
    _typeName?: "Telegram.type.InputPeerSelf";
}
export interface InputPeerChat {
    _typeName?: "Telegram.type.InputPeerChat";
    chat_id: number;
}
export interface InputPeerUser {
    _typeName?: "Telegram.type.InputPeerUser";
    user_id: number;
    access_hash: long;
}
export interface InputPeerChannel {
    _typeName?: "Telegram.type.InputPeerChannel";
    channel_id: number;
    access_hash: long;
}
export type TMtpInputPeer = InputPeerEmpty | InputPeerSelf | InputPeerChat | InputPeerUser | InputPeerChannel;
export interface InputUserEmpty {
    _typeName?: "Telegram.type.InputUserEmpty";
}
export interface InputUserSelf {
    _typeName?: "Telegram.type.InputUserSelf";
}
export interface InputUser {
    _typeName?: "Telegram.type.InputUser";
    user_id: number;
    access_hash: long;
}
export type TMtpInputUser = InputUserEmpty | InputUserSelf | InputUser;
export interface InputPhoneContact {
    _typeName?: "Telegram.type.InputPhoneContact";
    client_id: long;
    phone: string;
    first_name: string;
    last_name: string;
}
export type TMtpInputContact = InputPhoneContact;
export interface InputFile {
    _typeName?: "Telegram.type.InputFile";
    id: long;
    parts: number;
    name: string;
    md5_checksum: string;
}
export interface InputFileBig {
    _typeName?: "Telegram.type.InputFileBig";
    id: long;
    parts: number;
    name: string;
}
export type TMtpInputFile = InputFile | InputFileBig;
export interface InputMediaEmpty {
    _typeName?: "Telegram.type.InputMediaEmpty";
}
export interface InputMediaUploadedPhoto {
    _typeName?: "Telegram.type.InputMediaUploadedPhoto";
    flags: number;
    file: InputFile;
    caption: string;
    stickers?: IMtpVector<InputDocument>;
}
export interface InputMediaPhoto {
    _typeName?: "Telegram.type.InputMediaPhoto";
    id: InputPhoto;
    caption: string;
}
export interface InputMediaGeoPoint {
    _typeName?: "Telegram.type.InputMediaGeoPoint";
    geo_point: InputGeoPoint;
}
export interface InputMediaContact {
    _typeName?: "Telegram.type.InputMediaContact";
    phone_number: string;
    first_name: string;
    last_name: string;
}
export interface InputMediaUploadedDocument {
    _typeName?: "Telegram.type.InputMediaUploadedDocument";
    flags: number;
    file: InputFile;
    mime_type: string;
    attributes: IMtpVector<TMtpDocumentAttribute>;
    caption: string;
    stickers?: IMtpVector<InputDocument>;
}
export interface InputMediaUploadedThumbDocument {
    _typeName?: "Telegram.type.InputMediaUploadedThumbDocument";
    flags: number;
    file: InputFile;
    thumb: InputFile;
    mime_type: string;
    attributes: IMtpVector<TMtpDocumentAttribute>;
    caption: string;
    stickers?: IMtpVector<InputDocument>;
}
export interface InputMediaDocument {
    _typeName?: "Telegram.type.InputMediaDocument";
    id: InputDocument;
    caption: string;
}
export interface InputMediaVenue {
    _typeName?: "Telegram.type.InputMediaVenue";
    geo_point: InputGeoPoint;
    title: string;
    address: string;
    provider: string;
    venue_id: string;
}
export interface InputMediaGifExternal {
    _typeName?: "Telegram.type.InputMediaGifExternal";
    url: string;
    q: string;
}
export interface InputMediaPhotoExternal {
    _typeName?: "Telegram.type.InputMediaPhotoExternal";
    url: string;
    caption: string;
}
export interface InputMediaDocumentExternal {
    _typeName?: "Telegram.type.InputMediaDocumentExternal";
    url: string;
    caption: string;
}
export interface InputMediaGame {
    _typeName?: "Telegram.type.InputMediaGame";
    id: TMtpInputGame;
}
export type TMtpInputMedia = InputMediaEmpty | InputMediaUploadedPhoto | InputMediaPhoto | InputMediaGeoPoint | InputMediaContact | InputMediaUploadedDocument | InputMediaUploadedThumbDocument | InputMediaDocument | InputMediaVenue | InputMediaGifExternal | InputMediaPhotoExternal | InputMediaDocumentExternal | InputMediaGame;
export interface InputChatPhotoEmpty {
    _typeName?: "Telegram.type.InputChatPhotoEmpty";
}
export interface InputChatUploadedPhoto {
    _typeName?: "Telegram.type.InputChatUploadedPhoto";
    file: InputFile;
}
export interface InputChatPhoto {
    _typeName?: "Telegram.type.InputChatPhoto";
    id: InputPhoto;
}
export type TMtpInputChatPhoto = InputChatPhotoEmpty | InputChatUploadedPhoto | InputChatPhoto;
export interface InputGeoPointEmpty {
    _typeName?: "Telegram.type.InputGeoPointEmpty";
}
export interface InputGeoPoint {
    _typeName?: "Telegram.type.InputGeoPoint";
    lat: double;
    long: double;
}
export type TMtpInputGeoPoint = InputGeoPointEmpty | InputGeoPoint;
export interface InputPhotoEmpty {
    _typeName?: "Telegram.type.InputPhotoEmpty";
}
export interface InputPhoto {
    _typeName?: "Telegram.type.InputPhoto";
    id: long;
    access_hash: long;
}
export type TMtpInputPhoto = InputPhotoEmpty | InputPhoto;
export interface InputFileLocation {
    _typeName?: "Telegram.type.InputFileLocation";
    volume_id: long;
    local_id: number;
    secret: long;
}
export interface InputEncryptedFileLocation {
    _typeName?: "Telegram.type.InputEncryptedFileLocation";
    id: long;
    access_hash: long;
}
export interface InputDocumentFileLocation {
    _typeName?: "Telegram.type.InputDocumentFileLocation";
    id: long;
    access_hash: long;
    version: number;
}
export type TMtpInputFileLocation = InputFileLocation | InputEncryptedFileLocation | InputDocumentFileLocation;
export interface InputAppEvent {
    _typeName?: "Telegram.type.InputAppEvent";
    time: double;
    type: string;
    peer: long;
    data: string;
}
export type TMtpInputAppEvent = InputAppEvent;
export interface PeerUser {
    _typeName?: "Telegram.type.PeerUser";
    user_id: number;
}
export interface PeerChat {
    _typeName?: "Telegram.type.PeerChat";
    chat_id: number;
}
export interface PeerChannel {
    _typeName?: "Telegram.type.PeerChannel";
    channel_id: number;
}
export type TMtpPeer = PeerUser | PeerChat | PeerChannel;
export interface StorageFileUnknown {
    _typeName?: "Telegram.type.StorageFileUnknown";
}
export interface StorageFileJpeg {
    _typeName?: "Telegram.type.StorageFileJpeg";
}
export interface StorageFileGif {
    _typeName?: "Telegram.type.StorageFileGif";
}
export interface StorageFilePng {
    _typeName?: "Telegram.type.StorageFilePng";
}
export interface StorageFilePdf {
    _typeName?: "Telegram.type.StorageFilePdf";
}
export interface StorageFileMp3 {
    _typeName?: "Telegram.type.StorageFileMp3";
}
export interface StorageFileMov {
    _typeName?: "Telegram.type.StorageFileMov";
}
export interface StorageFilePartial {
    _typeName?: "Telegram.type.StorageFilePartial";
}
export interface StorageFileMp4 {
    _typeName?: "Telegram.type.StorageFileMp4";
}
export interface StorageFileWebp {
    _typeName?: "Telegram.type.StorageFileWebp";
}
export type TMtpStorage$FileType = StorageFileUnknown | StorageFileJpeg | StorageFileGif | StorageFilePng | StorageFilePdf | StorageFileMp3 | StorageFileMov | StorageFilePartial | StorageFileMp4 | StorageFileWebp;
export interface FileLocationUnavailable {
    _typeName?: "Telegram.type.FileLocationUnavailable";
    volume_id: long;
    local_id: number;
    secret: long;
}
export interface FileLocation {
    _typeName?: "Telegram.type.FileLocation";
    dc_id: number;
    volume_id: long;
    local_id: number;
    secret: long;
}
export type TMtpFileLocation = FileLocationUnavailable | FileLocation;
export interface UserEmpty {
    _typeName?: "Telegram.type.UserEmpty";
    id: number;
}
export interface User {
    _typeName?: "Telegram.type.User";
    flags: number;
    self?: true;
    contact?: true;
    mutual_contact?: true;
    deleted?: true;
    bot?: true;
    bot_chat_history?: true;
    bot_nochats?: true;
    verified?: true;
    restricted?: true;
    min?: true;
    bot_inline_geo?: true;
    id: number;
    access_hash?: long;
    first_name?: string;
    last_name?: string;
    username?: string;
    phone?: string;
    photo?: UserProfilePhoto;
    status?: TMtpUserStatus;
    bot_info_version?: number;
    restriction_reason?: string;
    bot_inline_placeholder?: string;
}
export type TMtpUser = UserEmpty | User;
export interface UserProfilePhotoEmpty {
    _typeName?: "Telegram.type.UserProfilePhotoEmpty";
}
export interface UserProfilePhoto {
    _typeName?: "Telegram.type.UserProfilePhoto";
    photo_id: long;
    photo_small: FileLocation;
    photo_big: FileLocation;
}
export type TMtpUserProfilePhoto = UserProfilePhotoEmpty | UserProfilePhoto;
export interface UserStatusEmpty {
    _typeName?: "Telegram.type.UserStatusEmpty";
}
export interface UserStatusOnline {
    _typeName?: "Telegram.type.UserStatusOnline";
    expires: number;
}
export interface UserStatusOffline {
    _typeName?: "Telegram.type.UserStatusOffline";
    was_online: number;
}
export interface UserStatusRecently {
    _typeName?: "Telegram.type.UserStatusRecently";
}
export interface UserStatusLastWeek {
    _typeName?: "Telegram.type.UserStatusLastWeek";
}
export interface UserStatusLastMonth {
    _typeName?: "Telegram.type.UserStatusLastMonth";
}
export type TMtpUserStatus = UserStatusEmpty | UserStatusOnline | UserStatusOffline | UserStatusRecently | UserStatusLastWeek | UserStatusLastMonth;
export interface ChatEmpty {
    _typeName?: "Telegram.type.ChatEmpty";
    id: number;
}
export interface Chat {
    _typeName?: "Telegram.type.Chat";
    flags: number;
    creator?: true;
    kicked?: true;
    left?: true;
    admins_enabled?: true;
    admin?: true;
    deactivated?: true;
    id: number;
    title: string;
    photo: ChatPhoto;
    participants_count: number;
    date: number;
    version: number;
    migrated_to?: InputChannel;
}
export interface ChatForbidden {
    _typeName?: "Telegram.type.ChatForbidden";
    id: number;
    title: string;
}
export interface Channel {
    _typeName?: "Telegram.type.Channel";
    flags: number;
    creator?: true;
    kicked?: true;
    left?: true;
    editor?: true;
    moderator?: true;
    broadcast?: true;
    verified?: true;
    megagroup?: true;
    restricted?: true;
    democracy?: true;
    signatures?: true;
    min?: true;
    id: number;
    access_hash?: long;
    title: string;
    username?: string;
    photo: ChatPhoto;
    date: number;
    version: number;
    restriction_reason?: string;
}
export interface ChannelForbidden {
    _typeName?: "Telegram.type.ChannelForbidden";
    flags: number;
    broadcast?: true;
    megagroup?: true;
    id: number;
    access_hash: long;
    title: string;
}
export type TMtpChat = ChatEmpty | Chat | ChatForbidden | Channel | ChannelForbidden;
export interface ChatFull {
    _typeName?: "Telegram.type.ChatFull";
    id: number;
    participants: ChatParticipants;
    chat_photo: Photo;
    notify_settings: PeerNotifySettings;
    exported_invite: TMtpExportedChatInvite;
    bot_info: IMtpVector<BotInfo>;
}
export interface ChannelFull {
    _typeName?: "Telegram.type.ChannelFull";
    flags: number;
    can_view_participants?: true;
    can_set_username?: true;
    id: number;
    about: string;
    participants_count?: number;
    admins_count?: number;
    kicked_count?: number;
    read_inbox_max_id: number;
    read_outbox_max_id: number;
    unread_count: number;
    chat_photo: Photo;
    notify_settings: PeerNotifySettings;
    exported_invite: TMtpExportedChatInvite;
    bot_info: IMtpVector<BotInfo>;
    migrated_from_chat_id?: number;
    migrated_from_max_id?: number;
    pinned_msg_id?: number;
}
export type TMtpChatFull = ChatFull | ChannelFull;
export interface ChatParticipant {
    _typeName?: "Telegram.type.ChatParticipant";
    user_id: number;
    inviter_id: number;
    date: number;
}
export interface ChatParticipantCreator {
    _typeName?: "Telegram.type.ChatParticipantCreator";
    user_id: number;
}
export interface ChatParticipantAdmin {
    _typeName?: "Telegram.type.ChatParticipantAdmin";
    user_id: number;
    inviter_id: number;
    date: number;
}
export type TMtpChatParticipant = ChatParticipant | ChatParticipantCreator | ChatParticipantAdmin;
export interface ChatParticipantsForbidden {
    _typeName?: "Telegram.type.ChatParticipantsForbidden";
    flags: number;
    chat_id: number;
    self_participant?: ChatParticipant;
}
export interface ChatParticipants {
    _typeName?: "Telegram.type.ChatParticipants";
    chat_id: number;
    participants: IMtpVector<ChatParticipant>;
    version: number;
}
export type TMtpChatParticipants = ChatParticipantsForbidden | ChatParticipants;
export interface ChatPhotoEmpty {
    _typeName?: "Telegram.type.ChatPhotoEmpty";
}
export interface ChatPhoto {
    _typeName?: "Telegram.type.ChatPhoto";
    photo_small: FileLocation;
    photo_big: FileLocation;
}
export type TMtpChatPhoto = ChatPhotoEmpty | ChatPhoto;
export interface MessageEmpty {
    _typeName?: "Telegram.type.MessageEmpty";
    id: number;
}
export interface Message {
    _typeName?: "Telegram.type.Message";
    flags: number;
    out?: true;
    mentioned?: true;
    media_unread?: true;
    silent?: true;
    post?: true;
    id: number;
    from_id?: number;
    to_id: TMtpPeer;
    fwd_from?: MessageFwdHeader;
    via_bot_id?: number;
    reply_to_msg_id?: number;
    date: number;
    message: string;
    media?: TMtpMessageMedia;
    reply_markup?: TMtpReplyMarkup;
    entities?: IMtpVector<TMtpMessageEntity>;
    views?: number;
    edit_date?: number;
}
export interface MessageService {
    _typeName?: "Telegram.type.MessageService";
    flags: number;
    out?: true;
    mentioned?: true;
    media_unread?: true;
    silent?: true;
    post?: true;
    id: number;
    from_id?: number;
    to_id: TMtpPeer;
    reply_to_msg_id?: number;
    date: number;
    action: TMtpMessageAction;
}
export type TMtpMessage = MessageEmpty | Message | MessageService;
export interface MessageMediaEmpty {
    _typeName?: "Telegram.type.MessageMediaEmpty";
}
export interface MessageMediaPhoto {
    _typeName?: "Telegram.type.MessageMediaPhoto";
    photo: Photo;
    caption: string;
}
export interface MessageMediaGeo {
    _typeName?: "Telegram.type.MessageMediaGeo";
    geo: GeoPoint;
}
export interface MessageMediaContact {
    _typeName?: "Telegram.type.MessageMediaContact";
    phone_number: string;
    first_name: string;
    last_name: string;
    user_id: number;
}
export interface MessageMediaUnsupported {
    _typeName?: "Telegram.type.MessageMediaUnsupported";
}
export interface MessageMediaDocument {
    _typeName?: "Telegram.type.MessageMediaDocument";
    document: Document;
    caption: string;
}
export interface MessageMediaWebPage {
    _typeName?: "Telegram.type.MessageMediaWebPage";
    webpage: WebPage;
}
export interface MessageMediaVenue {
    _typeName?: "Telegram.type.MessageMediaVenue";
    geo: GeoPoint;
    title: string;
    address: string;
    provider: string;
    venue_id: string;
}
export interface MessageMediaGame {
    _typeName?: "Telegram.type.MessageMediaGame";
    game: Game;
}
export type TMtpMessageMedia = MessageMediaEmpty | MessageMediaPhoto | MessageMediaGeo | MessageMediaContact | MessageMediaUnsupported | MessageMediaDocument | MessageMediaWebPage | MessageMediaVenue | MessageMediaGame;
export interface MessageActionEmpty {
    _typeName?: "Telegram.type.MessageActionEmpty";
}
export interface MessageActionChatCreate {
    _typeName?: "Telegram.type.MessageActionChatCreate";
    title: string;
    users: IMtpVector<number>;
}
export interface MessageActionChatEditTitle {
    _typeName?: "Telegram.type.MessageActionChatEditTitle";
    title: string;
}
export interface MessageActionChatEditPhoto {
    _typeName?: "Telegram.type.MessageActionChatEditPhoto";
    photo: Photo;
}
export interface MessageActionChatDeletePhoto {
    _typeName?: "Telegram.type.MessageActionChatDeletePhoto";
}
export interface MessageActionChatAddUser {
    _typeName?: "Telegram.type.MessageActionChatAddUser";
    users: IMtpVector<number>;
}
export interface MessageActionChatDeleteUser {
    _typeName?: "Telegram.type.MessageActionChatDeleteUser";
    user_id: number;
}
export interface MessageActionChatJoinedByLink {
    _typeName?: "Telegram.type.MessageActionChatJoinedByLink";
    inviter_id: number;
}
export interface MessageActionChannelCreate {
    _typeName?: "Telegram.type.MessageActionChannelCreate";
    title: string;
}
export interface MessageActionChatMigrateTo {
    _typeName?: "Telegram.type.MessageActionChatMigrateTo";
    channel_id: number;
}
export interface MessageActionChannelMigrateFrom {
    _typeName?: "Telegram.type.MessageActionChannelMigrateFrom";
    title: string;
    chat_id: number;
}
export interface MessageActionPinMessage {
    _typeName?: "Telegram.type.MessageActionPinMessage";
}
export interface MessageActionHistoryClear {
    _typeName?: "Telegram.type.MessageActionHistoryClear";
}
export interface MessageActionGameScore {
    _typeName?: "Telegram.type.MessageActionGameScore";
    game_id: long;
    score: number;
}
export type TMtpMessageAction = MessageActionEmpty | MessageActionChatCreate | MessageActionChatEditTitle | MessageActionChatEditPhoto | MessageActionChatDeletePhoto | MessageActionChatAddUser | MessageActionChatDeleteUser | MessageActionChatJoinedByLink | MessageActionChannelCreate | MessageActionChatMigrateTo | MessageActionChannelMigrateFrom | MessageActionPinMessage | MessageActionHistoryClear | MessageActionGameScore;
export interface Dialog {
    _typeName?: "Telegram.type.Dialog";
    flags: number;
    peer: TMtpPeer;
    top_message: number;
    read_inbox_max_id: number;
    read_outbox_max_id: number;
    unread_count: number;
    notify_settings: PeerNotifySettings;
    pts?: number;
    draft?: DraftMessage;
}
export type TMtpDialog = Dialog;
export interface PhotoEmpty {
    _typeName?: "Telegram.type.PhotoEmpty";
    id: long;
}
export interface Photo {
    _typeName?: "Telegram.type.Photo";
    flags: number;
    has_stickers?: true;
    id: long;
    access_hash: long;
    date: number;
    sizes: IMtpVector<PhotoSize>;
}
export type TMtpPhoto = PhotoEmpty | Photo;
export interface PhotoSizeEmpty {
    _typeName?: "Telegram.type.PhotoSizeEmpty";
    type: string;
}
export interface PhotoSize {
    _typeName?: "Telegram.type.PhotoSize";
    type: string;
    location: FileLocation;
    w: number;
    h: number;
    size: number;
}
export interface PhotoCachedSize {
    _typeName?: "Telegram.type.PhotoCachedSize";
    type: string;
    location: FileLocation;
    w: number;
    h: number;
    bytes: bytes;
}
export type TMtpPhotoSize = PhotoSizeEmpty | PhotoSize | PhotoCachedSize;
export interface GeoPointEmpty {
    _typeName?: "Telegram.type.GeoPointEmpty";
}
export interface GeoPoint {
    _typeName?: "Telegram.type.GeoPoint";
    long: double;
    lat: double;
}
export type TMtpGeoPoint = GeoPointEmpty | GeoPoint;
export interface AuthCheckedPhone {
    _typeName?: "Telegram.type.AuthCheckedPhone";
    phone_registered: TMtpBool;
}
export type TMtpAuth$CheckedPhone = AuthCheckedPhone;
export interface AuthSentCode {
    _typeName?: "Telegram.type.AuthSentCode";
    flags: number;
    phone_registered?: true;
    type: TMtpAuth$SentCodeType;
    phone_code_hash: string;
    next_type?: TMtpAuth$CodeType;
    timeout?: number;
}
export type TMtpAuth$SentCode = AuthSentCode;
export interface AuthAuthorization {
    _typeName?: "Telegram.type.AuthAuthorization";
    flags: number;
    tmp_sessions?: number;
    user: User;
}
export type TMtpAuth$Authorization = AuthAuthorization;
export interface AuthExportedAuthorization {
    _typeName?: "Telegram.type.AuthExportedAuthorization";
    id: number;
    bytes: bytes;
}
export type TMtpAuth$ExportedAuthorization = AuthExportedAuthorization;
export interface InputNotifyPeer {
    _typeName?: "Telegram.type.InputNotifyPeer";
    peer: TMtpInputPeer;
}
export interface InputNotifyUsers {
    _typeName?: "Telegram.type.InputNotifyUsers";
}
export interface InputNotifyChats {
    _typeName?: "Telegram.type.InputNotifyChats";
}
export interface InputNotifyAll {
    _typeName?: "Telegram.type.InputNotifyAll";
}
export type TMtpInputNotifyPeer = InputNotifyPeer | InputNotifyUsers | InputNotifyChats | InputNotifyAll;
export interface InputPeerNotifyEventsEmpty {
    _typeName?: "Telegram.type.InputPeerNotifyEventsEmpty";
}
export interface InputPeerNotifyEventsAll {
    _typeName?: "Telegram.type.InputPeerNotifyEventsAll";
}
export type TMtpInputPeerNotifyEvents = InputPeerNotifyEventsEmpty | InputPeerNotifyEventsAll;
export interface InputPeerNotifySettings {
    _typeName?: "Telegram.type.InputPeerNotifySettings";
    flags: number;
    show_previews?: true;
    silent?: true;
    mute_until: number;
    sound: string;
}
export type TMtpInputPeerNotifySettings = InputPeerNotifySettings;
export interface PeerNotifyEventsEmpty {
    _typeName?: "Telegram.type.PeerNotifyEventsEmpty";
}
export interface PeerNotifyEventsAll {
    _typeName?: "Telegram.type.PeerNotifyEventsAll";
}
export type TMtpPeerNotifyEvents = PeerNotifyEventsEmpty | PeerNotifyEventsAll;
export interface PeerNotifySettingsEmpty {
    _typeName?: "Telegram.type.PeerNotifySettingsEmpty";
}
export interface PeerNotifySettings {
    _typeName?: "Telegram.type.PeerNotifySettings";
    flags: number;
    show_previews?: true;
    silent?: true;
    mute_until: number;
    sound: string;
}
export type TMtpPeerNotifySettings = PeerNotifySettingsEmpty | PeerNotifySettings;
export interface PeerSettings {
    _typeName?: "Telegram.type.PeerSettings";
    flags: number;
    report_spam?: true;
}
export type TMtpPeerSettings = PeerSettings;
export interface WallPaper {
    _typeName?: "Telegram.type.WallPaper";
    id: number;
    title: string;
    sizes: IMtpVector<PhotoSize>;
    color: number;
}
export interface WallPaperSolid {
    _typeName?: "Telegram.type.WallPaperSolid";
    id: number;
    title: string;
    bg_color: number;
    color: number;
}
export type TMtpWallPaper = WallPaper | WallPaperSolid;
export interface InputReportReasonSpam {
    _typeName?: "Telegram.type.InputReportReasonSpam";
}
export interface InputReportReasonViolence {
    _typeName?: "Telegram.type.InputReportReasonViolence";
}
export interface InputReportReasonPornography {
    _typeName?: "Telegram.type.InputReportReasonPornography";
}
export interface InputReportReasonOther {
    _typeName?: "Telegram.type.InputReportReasonOther";
    text: string;
}
export type TMtpReportReason = InputReportReasonSpam | InputReportReasonViolence | InputReportReasonPornography | InputReportReasonOther;
export interface UserFull {
    _typeName?: "Telegram.type.UserFull";
    flags: number;
    blocked?: true;
    user: User;
    about?: string;
    link: TMtpContacts$Link;
    profile_photo?: Photo;
    notify_settings: PeerNotifySettings;
    bot_info?: BotInfo;
}
export type TMtpUserFull = UserFull;
export interface Contact {
    _typeName?: "Telegram.type.Contact";
    user_id: number;
    mutual: TMtpBool;
}
export type TMtpContact = Contact;
export interface ImportedContact {
    _typeName?: "Telegram.type.ImportedContact";
    user_id: number;
    client_id: long;
}
export type TMtpImportedContact = ImportedContact;
export interface ContactBlocked {
    _typeName?: "Telegram.type.ContactBlocked";
    user_id: number;
    date: number;
}
export type TMtpContactBlocked = ContactBlocked;
export interface ContactStatus {
    _typeName?: "Telegram.type.ContactStatus";
    user_id: number;
    status: TMtpUserStatus;
}
export type TMtpContactStatus = ContactStatus;
export interface ContactsLink {
    _typeName?: "Telegram.type.ContactsLink";
    my_link: TMtpContactLink;
    foreign_link: TMtpContactLink;
    user: User;
}
export type TMtpContacts$Link = ContactsLink;
export interface ContactsContactsNotModified {
    _typeName?: "Telegram.type.ContactsContactsNotModified";
}
export interface ContactsContacts {
    _typeName?: "Telegram.type.ContactsContacts";
    contacts: IMtpVector<Contact>;
    users: IMtpVector<User>;
}
export type TMtpContacts$Contacts = ContactsContactsNotModified | ContactsContacts;
export interface ContactsImportedContacts {
    _typeName?: "Telegram.type.ContactsImportedContacts";
    imported: IMtpVector<ImportedContact>;
    retry_contacts: IMtpVector<long>;
    users: IMtpVector<User>;
}
export type TMtpContacts$ImportedContacts = ContactsImportedContacts;
export interface ContactsBlocked {
    _typeName?: "Telegram.type.ContactsBlocked";
    blocked: IMtpVector<ContactBlocked>;
    users: IMtpVector<User>;
}
export interface ContactsBlockedSlice {
    _typeName?: "Telegram.type.ContactsBlockedSlice";
    count: number;
    blocked: IMtpVector<ContactBlocked>;
    users: IMtpVector<User>;
}
export type TMtpContacts$Blocked = ContactsBlocked | ContactsBlockedSlice;
export interface MessagesDialogs {
    _typeName?: "Telegram.type.MessagesDialogs";
    dialogs: IMtpVector<Dialog>;
    messages: IMtpVector<Message>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export interface MessagesDialogsSlice {
    _typeName?: "Telegram.type.MessagesDialogsSlice";
    count: number;
    dialogs: IMtpVector<Dialog>;
    messages: IMtpVector<Message>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export type TMtpMessages$Dialogs = MessagesDialogs | MessagesDialogsSlice;
export interface MessagesMessages {
    _typeName?: "Telegram.type.MessagesMessages";
    messages: IMtpVector<Message>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export interface MessagesMessagesSlice {
    _typeName?: "Telegram.type.MessagesMessagesSlice";
    count: number;
    messages: IMtpVector<Message>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export interface MessagesChannelMessages {
    _typeName?: "Telegram.type.MessagesChannelMessages";
    flags: number;
    pts: number;
    count: number;
    messages: IMtpVector<Message>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export type TMtpMessages$Messages = MessagesMessages | MessagesMessagesSlice | MessagesChannelMessages;
export interface MessagesChats {
    _typeName?: "Telegram.type.MessagesChats";
    chats: IMtpVector<Chat>;
}
export type TMtpMessages$Chats = MessagesChats;
export interface MessagesChatFull {
    _typeName?: "Telegram.type.MessagesChatFull";
    full_chat: ChatFull;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export type TMtpMessages$ChatFull = MessagesChatFull;
export interface MessagesAffectedHistory {
    _typeName?: "Telegram.type.MessagesAffectedHistory";
    pts: number;
    pts_count: number;
    offset: number;
}
export type TMtpMessages$AffectedHistory = MessagesAffectedHistory;
export interface InputMessagesFilterEmpty {
    _typeName?: "Telegram.type.InputMessagesFilterEmpty";
}
export interface InputMessagesFilterPhotos {
    _typeName?: "Telegram.type.InputMessagesFilterPhotos";
}
export interface InputMessagesFilterVideo {
    _typeName?: "Telegram.type.InputMessagesFilterVideo";
}
export interface InputMessagesFilterPhotoVideo {
    _typeName?: "Telegram.type.InputMessagesFilterPhotoVideo";
}
export interface InputMessagesFilterPhotoVideoDocuments {
    _typeName?: "Telegram.type.InputMessagesFilterPhotoVideoDocuments";
}
export interface InputMessagesFilterDocument {
    _typeName?: "Telegram.type.InputMessagesFilterDocument";
}
export interface InputMessagesFilterUrl {
    _typeName?: "Telegram.type.InputMessagesFilterUrl";
}
export interface InputMessagesFilterGif {
    _typeName?: "Telegram.type.InputMessagesFilterGif";
}
export interface InputMessagesFilterVoice {
    _typeName?: "Telegram.type.InputMessagesFilterVoice";
}
export interface InputMessagesFilterMusic {
    _typeName?: "Telegram.type.InputMessagesFilterMusic";
}
export interface InputMessagesFilterChatPhotos {
    _typeName?: "Telegram.type.InputMessagesFilterChatPhotos";
}
export type TMtpMessagesFilter = InputMessagesFilterEmpty | InputMessagesFilterPhotos | InputMessagesFilterVideo | InputMessagesFilterPhotoVideo | InputMessagesFilterPhotoVideoDocuments | InputMessagesFilterDocument | InputMessagesFilterUrl | InputMessagesFilterGif | InputMessagesFilterVoice | InputMessagesFilterMusic | InputMessagesFilterChatPhotos;
export interface UpdateNewMessage {
    _typeName?: "Telegram.type.UpdateNewMessage";
    message: Message;
    pts: number;
    pts_count: number;
}
export interface UpdateMessageId {
    _typeName?: "Telegram.type.UpdateMessageId";
    id: number;
    random_id: long;
}
export interface UpdateDeleteMessages {
    _typeName?: "Telegram.type.UpdateDeleteMessages";
    messages: IMtpVector<number>;
    pts: number;
    pts_count: number;
}
export interface UpdateUserTyping {
    _typeName?: "Telegram.type.UpdateUserTyping";
    user_id: number;
    action: TMtpSendMessageAction;
}
export interface UpdateChatUserTyping {
    _typeName?: "Telegram.type.UpdateChatUserTyping";
    chat_id: number;
    user_id: number;
    action: TMtpSendMessageAction;
}
export interface UpdateChatParticipants {
    _typeName?: "Telegram.type.UpdateChatParticipants";
    participants: ChatParticipants;
}
export interface UpdateUserStatus {
    _typeName?: "Telegram.type.UpdateUserStatus";
    user_id: number;
    status: TMtpUserStatus;
}
export interface UpdateUserName {
    _typeName?: "Telegram.type.UpdateUserName";
    user_id: number;
    first_name: string;
    last_name: string;
    username: string;
}
export interface UpdateUserPhoto {
    _typeName?: "Telegram.type.UpdateUserPhoto";
    user_id: number;
    date: number;
    photo: UserProfilePhoto;
    previous: TMtpBool;
}
export interface UpdateContactRegistered {
    _typeName?: "Telegram.type.UpdateContactRegistered";
    user_id: number;
    date: number;
}
export interface UpdateContactLink {
    _typeName?: "Telegram.type.UpdateContactLink";
    user_id: number;
    my_link: TMtpContactLink;
    foreign_link: TMtpContactLink;
}
export interface UpdateNewAuthorization {
    _typeName?: "Telegram.type.UpdateNewAuthorization";
    auth_key_id: long;
    date: number;
    device: string;
    location: string;
}
export interface UpdateNewEncryptedMessage {
    _typeName?: "Telegram.type.UpdateNewEncryptedMessage";
    message: EncryptedMessage;
    qts: number;
}
export interface UpdateEncryptedChatTyping {
    _typeName?: "Telegram.type.UpdateEncryptedChatTyping";
    chat_id: number;
}
export interface UpdateEncryption {
    _typeName?: "Telegram.type.UpdateEncryption";
    chat: EncryptedChat;
    date: number;
}
export interface UpdateEncryptedMessagesRead {
    _typeName?: "Telegram.type.UpdateEncryptedMessagesRead";
    chat_id: number;
    max_date: number;
    date: number;
}
export interface UpdateChatParticipantAdd {
    _typeName?: "Telegram.type.UpdateChatParticipantAdd";
    chat_id: number;
    user_id: number;
    inviter_id: number;
    date: number;
    version: number;
}
export interface UpdateChatParticipantDelete {
    _typeName?: "Telegram.type.UpdateChatParticipantDelete";
    chat_id: number;
    user_id: number;
    version: number;
}
export interface UpdateDcOptions {
    _typeName?: "Telegram.type.UpdateDcOptions";
    dc_options: IMtpVector<DcOption>;
}
export interface UpdateUserBlocked {
    _typeName?: "Telegram.type.UpdateUserBlocked";
    user_id: number;
    blocked: TMtpBool;
}
export interface UpdateNotifySettings {
    _typeName?: "Telegram.type.UpdateNotifySettings";
    peer: NotifyPeer;
    notify_settings: PeerNotifySettings;
}
export interface UpdateServiceNotification {
    _typeName?: "Telegram.type.UpdateServiceNotification";
    type: string;
    message: string;
    media: TMtpMessageMedia;
    popup: TMtpBool;
}
export interface UpdatePrivacy {
    _typeName?: "Telegram.type.UpdatePrivacy";
    key: TMtpPrivacyKey;
    rules: IMtpVector<TMtpPrivacyRule>;
}
export interface UpdateUserPhone {
    _typeName?: "Telegram.type.UpdateUserPhone";
    user_id: number;
    phone: string;
}
export interface UpdateReadHistoryInbox {
    _typeName?: "Telegram.type.UpdateReadHistoryInbox";
    peer: TMtpPeer;
    max_id: number;
    pts: number;
    pts_count: number;
}
export interface UpdateReadHistoryOutbox {
    _typeName?: "Telegram.type.UpdateReadHistoryOutbox";
    peer: TMtpPeer;
    max_id: number;
    pts: number;
    pts_count: number;
}
export interface UpdateWebPage {
    _typeName?: "Telegram.type.UpdateWebPage";
    webpage: WebPage;
    pts: number;
    pts_count: number;
}
export interface UpdateReadMessagesContents {
    _typeName?: "Telegram.type.UpdateReadMessagesContents";
    messages: IMtpVector<number>;
    pts: number;
    pts_count: number;
}
export interface UpdateChannelTooLong {
    _typeName?: "Telegram.type.UpdateChannelTooLong";
    flags: number;
    channel_id: number;
    pts?: number;
}
export interface UpdateChannel {
    _typeName?: "Telegram.type.UpdateChannel";
    channel_id: number;
}
export interface UpdateNewChannelMessage {
    _typeName?: "Telegram.type.UpdateNewChannelMessage";
    message: Message;
    pts: number;
    pts_count: number;
}
export interface UpdateReadChannelInbox {
    _typeName?: "Telegram.type.UpdateReadChannelInbox";
    channel_id: number;
    max_id: number;
}
export interface UpdateDeleteChannelMessages {
    _typeName?: "Telegram.type.UpdateDeleteChannelMessages";
    channel_id: number;
    messages: IMtpVector<number>;
    pts: number;
    pts_count: number;
}
export interface UpdateChannelMessageViews {
    _typeName?: "Telegram.type.UpdateChannelMessageViews";
    channel_id: number;
    id: number;
    views: number;
}
export interface UpdateChatAdmins {
    _typeName?: "Telegram.type.UpdateChatAdmins";
    chat_id: number;
    enabled: TMtpBool;
    version: number;
}
export interface UpdateChatParticipantAdmin {
    _typeName?: "Telegram.type.UpdateChatParticipantAdmin";
    chat_id: number;
    user_id: number;
    is_admin: TMtpBool;
    version: number;
}
export interface UpdateNewStickerSet {
    _typeName?: "Telegram.type.UpdateNewStickerSet";
    stickerset: TMtpMessages$StickerSet;
}
export interface UpdateStickerSetsOrder {
    _typeName?: "Telegram.type.UpdateStickerSetsOrder";
    flags: number;
    masks?: true;
    order: IMtpVector<long>;
}
export interface UpdateStickerSets {
    _typeName?: "Telegram.type.UpdateStickerSets";
}
export interface UpdateSavedGifs {
    _typeName?: "Telegram.type.UpdateSavedGifs";
}
export interface UpdateBotInlineQuery {
    _typeName?: "Telegram.type.UpdateBotInlineQuery";
    flags: number;
    query_id: long;
    user_id: number;
    query: string;
    geo?: GeoPoint;
    offset: string;
}
export interface UpdateBotInlineSend {
    _typeName?: "Telegram.type.UpdateBotInlineSend";
    flags: number;
    user_id: number;
    query: string;
    geo?: GeoPoint;
    id: string;
    msg_id?: TMtpInputBotInlineMessageID;
}
export interface UpdateEditChannelMessage {
    _typeName?: "Telegram.type.UpdateEditChannelMessage";
    message: Message;
    pts: number;
    pts_count: number;
}
export interface UpdateChannelPinnedMessage {
    _typeName?: "Telegram.type.UpdateChannelPinnedMessage";
    channel_id: number;
    id: number;
}
export interface UpdateBotCallbackQuery {
    _typeName?: "Telegram.type.UpdateBotCallbackQuery";
    flags: number;
    query_id: long;
    user_id: number;
    peer: TMtpPeer;
    msg_id: number;
    chat_instance: long;
    data?: bytes;
    game_short_name?: string;
}
export interface UpdateEditMessage {
    _typeName?: "Telegram.type.UpdateEditMessage";
    message: Message;
    pts: number;
    pts_count: number;
}
export interface UpdateInlineBotCallbackQuery {
    _typeName?: "Telegram.type.UpdateInlineBotCallbackQuery";
    flags: number;
    query_id: long;
    user_id: number;
    msg_id: TMtpInputBotInlineMessageID;
    chat_instance: long;
    data?: bytes;
    game_short_name?: string;
}
export interface UpdateReadChannelOutbox {
    _typeName?: "Telegram.type.UpdateReadChannelOutbox";
    channel_id: number;
    max_id: number;
}
export interface UpdateDraftMessage {
    _typeName?: "Telegram.type.UpdateDraftMessage";
    peer: TMtpPeer;
    draft: DraftMessage;
}
export interface UpdateReadFeaturedStickers {
    _typeName?: "Telegram.type.UpdateReadFeaturedStickers";
}
export interface UpdateRecentStickers {
    _typeName?: "Telegram.type.UpdateRecentStickers";
}
export interface UpdateConfig {
    _typeName?: "Telegram.type.UpdateConfig";
}
export interface UpdatePtsChanged {
    _typeName?: "Telegram.type.UpdatePtsChanged";
}
export type TMtpUpdate = UpdateNewMessage | UpdateMessageId | UpdateDeleteMessages | UpdateUserTyping | UpdateChatUserTyping | UpdateChatParticipants | UpdateUserStatus | UpdateUserName | UpdateUserPhoto | UpdateContactRegistered | UpdateContactLink | UpdateNewAuthorization | UpdateNewEncryptedMessage | UpdateEncryptedChatTyping | UpdateEncryption | UpdateEncryptedMessagesRead | UpdateChatParticipantAdd | UpdateChatParticipantDelete | UpdateDcOptions | UpdateUserBlocked | UpdateNotifySettings | UpdateServiceNotification | UpdatePrivacy | UpdateUserPhone | UpdateReadHistoryInbox | UpdateReadHistoryOutbox | UpdateWebPage | UpdateReadMessagesContents | UpdateChannelTooLong | UpdateChannel | UpdateNewChannelMessage | UpdateReadChannelInbox | UpdateDeleteChannelMessages | UpdateChannelMessageViews | UpdateChatAdmins | UpdateChatParticipantAdmin | UpdateNewStickerSet | UpdateStickerSetsOrder | UpdateStickerSets | UpdateSavedGifs | UpdateBotInlineQuery | UpdateBotInlineSend | UpdateEditChannelMessage | UpdateChannelPinnedMessage | UpdateBotCallbackQuery | UpdateEditMessage | UpdateInlineBotCallbackQuery | UpdateReadChannelOutbox | UpdateDraftMessage | UpdateReadFeaturedStickers | UpdateRecentStickers | UpdateConfig | UpdatePtsChanged;
export interface UpdatesState {
    _typeName?: "Telegram.type.UpdatesState";
    pts: number;
    qts: number;
    date: number;
    seq: number;
    unread_count: number;
}
export type TMtpUpdates$State = UpdatesState;
export interface UpdatesDifferenceEmpty {
    _typeName?: "Telegram.type.UpdatesDifferenceEmpty";
    date: number;
    seq: number;
}
export interface UpdatesDifference {
    _typeName?: "Telegram.type.UpdatesDifference";
    new_messages: IMtpVector<Message>;
    new_encrypted_messages: IMtpVector<EncryptedMessage>;
    other_updates: IMtpVector<TMtpUpdate>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
    state: TMtpUpdates$State;
}
export interface UpdatesDifferenceSlice {
    _typeName?: "Telegram.type.UpdatesDifferenceSlice";
    new_messages: IMtpVector<Message>;
    new_encrypted_messages: IMtpVector<EncryptedMessage>;
    other_updates: IMtpVector<TMtpUpdate>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
    intermediate_state: TMtpUpdates$State;
}
export type TMtpUpdates$Difference = UpdatesDifferenceEmpty | UpdatesDifference | UpdatesDifferenceSlice;
export interface UpdatesTooLong {
    _typeName?: "Telegram.type.UpdatesTooLong";
}
export interface UpdateShortMessage {
    _typeName?: "Telegram.type.UpdateShortMessage";
    flags: number;
    out?: true;
    mentioned?: true;
    media_unread?: true;
    silent?: true;
    id: number;
    user_id: number;
    message: string;
    pts: number;
    pts_count: number;
    date: number;
    fwd_from?: MessageFwdHeader;
    via_bot_id?: number;
    reply_to_msg_id?: number;
    entities?: IMtpVector<TMtpMessageEntity>;
}
export interface UpdateShortChatMessage {
    _typeName?: "Telegram.type.UpdateShortChatMessage";
    flags: number;
    out?: true;
    mentioned?: true;
    media_unread?: true;
    silent?: true;
    id: number;
    from_id: number;
    chat_id: number;
    message: string;
    pts: number;
    pts_count: number;
    date: number;
    fwd_from?: MessageFwdHeader;
    via_bot_id?: number;
    reply_to_msg_id?: number;
    entities?: IMtpVector<TMtpMessageEntity>;
}
export interface UpdateShort {
    _typeName?: "Telegram.type.UpdateShort";
    update: TMtpUpdate;
    date: number;
}
export interface UpdatesCombined {
    _typeName?: "Telegram.type.UpdatesCombined";
    updates: IMtpVector<TMtpUpdate>;
    users: IMtpVector<User>;
    chats: IMtpVector<Chat>;
    date: number;
    seq_start: number;
    seq: number;
}
export interface Updates {
    _typeName?: "Telegram.type.Updates";
    updates: IMtpVector<TMtpUpdate>;
    users: IMtpVector<User>;
    chats: IMtpVector<Chat>;
    date: number;
    seq: number;
}
export interface UpdateShortSentMessage {
    _typeName?: "Telegram.type.UpdateShortSentMessage";
    flags: number;
    out?: true;
    id: number;
    pts: number;
    pts_count: number;
    date: number;
    media?: TMtpMessageMedia;
    entities?: IMtpVector<TMtpMessageEntity>;
}
export type TMtpUpdates = UpdatesTooLong | UpdateShortMessage | UpdateShortChatMessage | UpdateShort | UpdatesCombined | Updates | UpdateShortSentMessage;
export interface PhotosPhotos {
    _typeName?: "Telegram.type.PhotosPhotos";
    photos: IMtpVector<Photo>;
    users: IMtpVector<User>;
}
export interface PhotosPhotosSlice {
    _typeName?: "Telegram.type.PhotosPhotosSlice";
    count: number;
    photos: IMtpVector<Photo>;
    users: IMtpVector<User>;
}
export type TMtpPhotos$Photos = PhotosPhotos | PhotosPhotosSlice;
export interface PhotosPhoto {
    _typeName?: "Telegram.type.PhotosPhoto";
    photo: Photo;
    users: IMtpVector<User>;
}
export type TMtpPhotos$Photo = PhotosPhoto;
export interface UploadFile {
    _typeName?: "Telegram.type.UploadFile";
    type: TMtpStorage$FileType;
    mtime: number;
    bytes: bytes;
}
export type TMtpUpload$File = UploadFile;
export interface DcOption {
    _typeName?: "Telegram.type.DcOption";
    flags: number;
    ipv6?: true;
    media_only?: true;
    tcpo_only?: true;
    id: number;
    ip_address: string;
    port: number;
}
export type TMtpDcOption = DcOption;
export interface Config {
    _typeName?: "Telegram.type.Config";
    flags: number;
    date: number;
    expires: number;
    test_mode: TMtpBool;
    this_dc: number;
    dc_options: IMtpVector<DcOption>;
    chat_size_max: number;
    megagroup_size_max: number;
    forwarded_count_max: number;
    online_update_period_ms: number;
    offline_blur_timeout_ms: number;
    offline_idle_timeout_ms: number;
    online_cloud_timeout_ms: number;
    notify_cloud_delay_ms: number;
    notify_default_delay_ms: number;
    chat_big_size: number;
    push_chat_period_ms: number;
    push_chat_limit: number;
    saved_gifs_limit: number;
    edit_time_limit: number;
    rating_e_decay: number;
    stickers_recent_limit: number;
    tmp_sessions?: number;
}
export type TMtpConfig = Config;
export interface NearestDc {
    _typeName?: "Telegram.type.NearestDc";
    country: string;
    this_dc: number;
    nearest_dc: number;
}
export type TMtpNearestDc = NearestDc;
export interface HelpAppUpdate {
    _typeName?: "Telegram.type.HelpAppUpdate";
    id: number;
    critical: TMtpBool;
    url: string;
    text: string;
}
export interface HelpNoAppUpdate {
    _typeName?: "Telegram.type.HelpNoAppUpdate";
}
export type TMtpHelp$AppUpdate = HelpAppUpdate | HelpNoAppUpdate;
export interface HelpInviteText {
    _typeName?: "Telegram.type.HelpInviteText";
    message: string;
}
export type TMtpHelp$InviteText = HelpInviteText;
export interface EncryptedChatEmpty {
    _typeName?: "Telegram.type.EncryptedChatEmpty";
    id: number;
}
export interface EncryptedChatWaiting {
    _typeName?: "Telegram.type.EncryptedChatWaiting";
    id: number;
    access_hash: long;
    date: number;
    admin_id: number;
    participant_id: number;
}
export interface EncryptedChatRequested {
    _typeName?: "Telegram.type.EncryptedChatRequested";
    id: number;
    access_hash: long;
    date: number;
    admin_id: number;
    participant_id: number;
    g_a: bytes;
}
export interface EncryptedChat {
    _typeName?: "Telegram.type.EncryptedChat";
    id: number;
    access_hash: long;
    date: number;
    admin_id: number;
    participant_id: number;
    g_a_or_b: bytes;
    key_fingerprint: long;
}
export interface EncryptedChatDiscarded {
    _typeName?: "Telegram.type.EncryptedChatDiscarded";
    id: number;
}
export type TMtpEncryptedChat = EncryptedChatEmpty | EncryptedChatWaiting | EncryptedChatRequested | EncryptedChat | EncryptedChatDiscarded;
export interface InputEncryptedChat {
    _typeName?: "Telegram.type.InputEncryptedChat";
    chat_id: number;
    access_hash: long;
}
export type TMtpInputEncryptedChat = InputEncryptedChat;
export interface EncryptedFileEmpty {
    _typeName?: "Telegram.type.EncryptedFileEmpty";
}
export interface EncryptedFile {
    _typeName?: "Telegram.type.EncryptedFile";
    id: long;
    access_hash: long;
    size: number;
    dc_id: number;
    key_fingerprint: number;
}
export type TMtpEncryptedFile = EncryptedFileEmpty | EncryptedFile;
export interface InputEncryptedFileEmpty {
    _typeName?: "Telegram.type.InputEncryptedFileEmpty";
}
export interface InputEncryptedFileUploaded {
    _typeName?: "Telegram.type.InputEncryptedFileUploaded";
    id: long;
    parts: number;
    md5_checksum: string;
    key_fingerprint: number;
}
export interface InputEncryptedFile {
    _typeName?: "Telegram.type.InputEncryptedFile";
    id: long;
    access_hash: long;
}
export interface InputEncryptedFileBigUploaded {
    _typeName?: "Telegram.type.InputEncryptedFileBigUploaded";
    id: long;
    parts: number;
    key_fingerprint: number;
}
export type TMtpInputEncryptedFile = InputEncryptedFileEmpty | InputEncryptedFileUploaded | InputEncryptedFile | InputEncryptedFileBigUploaded;
export interface EncryptedMessage {
    _typeName?: "Telegram.type.EncryptedMessage";
    random_id: long;
    chat_id: number;
    date: number;
    bytes: bytes;
    file: EncryptedFile;
}
export interface EncryptedMessageService {
    _typeName?: "Telegram.type.EncryptedMessageService";
    random_id: long;
    chat_id: number;
    date: number;
    bytes: bytes;
}
export type TMtpEncryptedMessage = EncryptedMessage | EncryptedMessageService;
export interface MessagesDhConfigNotModified {
    _typeName?: "Telegram.type.MessagesDhConfigNotModified";
    random: bytes;
}
export interface MessagesDhConfig {
    _typeName?: "Telegram.type.MessagesDhConfig";
    g: number;
    p: bytes;
    version: number;
    random: bytes;
}
export type TMtpMessages$DhConfig = MessagesDhConfigNotModified | MessagesDhConfig;
export interface MessagesSentEncryptedMessage {
    _typeName?: "Telegram.type.MessagesSentEncryptedMessage";
    date: number;
}
export interface MessagesSentEncryptedFile {
    _typeName?: "Telegram.type.MessagesSentEncryptedFile";
    date: number;
    file: EncryptedFile;
}
export type TMtpMessages$SentEncryptedMessage = MessagesSentEncryptedMessage | MessagesSentEncryptedFile;
export interface InputDocumentEmpty {
    _typeName?: "Telegram.type.InputDocumentEmpty";
}
export interface InputDocument {
    _typeName?: "Telegram.type.InputDocument";
    id: long;
    access_hash: long;
}
export type TMtpInputDocument = InputDocumentEmpty | InputDocument;
export interface DocumentEmpty {
    _typeName?: "Telegram.type.DocumentEmpty";
    id: long;
}
export interface Document {
    _typeName?: "Telegram.type.Document";
    id: long;
    access_hash: long;
    date: number;
    mime_type: string;
    size: number;
    thumb: PhotoSize;
    dc_id: number;
    version: number;
    attributes: IMtpVector<TMtpDocumentAttribute>;
}
export type TMtpDocument = DocumentEmpty | Document;
export interface HelpSupport {
    _typeName?: "Telegram.type.HelpSupport";
    phone_number: string;
    user: User;
}
export type TMtpHelp$Support = HelpSupport;
export interface NotifyPeer {
    _typeName?: "Telegram.type.NotifyPeer";
    peer: TMtpPeer;
}
export interface NotifyUsers {
    _typeName?: "Telegram.type.NotifyUsers";
}
export interface NotifyChats {
    _typeName?: "Telegram.type.NotifyChats";
}
export interface NotifyAll {
    _typeName?: "Telegram.type.NotifyAll";
}
export type TMtpNotifyPeer = NotifyPeer | NotifyUsers | NotifyChats | NotifyAll;
export interface SendMessageTypingAction {
    _typeName?: "Telegram.type.SendMessageTypingAction";
}
export interface SendMessageCancelAction {
    _typeName?: "Telegram.type.SendMessageCancelAction";
}
export interface SendMessageRecordVideoAction {
    _typeName?: "Telegram.type.SendMessageRecordVideoAction";
}
export interface SendMessageUploadVideoAction {
    _typeName?: "Telegram.type.SendMessageUploadVideoAction";
    progress: number;
}
export interface SendMessageRecordAudioAction {
    _typeName?: "Telegram.type.SendMessageRecordAudioAction";
}
export interface SendMessageUploadAudioAction {
    _typeName?: "Telegram.type.SendMessageUploadAudioAction";
    progress: number;
}
export interface SendMessageUploadPhotoAction {
    _typeName?: "Telegram.type.SendMessageUploadPhotoAction";
    progress: number;
}
export interface SendMessageUploadDocumentAction {
    _typeName?: "Telegram.type.SendMessageUploadDocumentAction";
    progress: number;
}
export interface SendMessageGeoLocationAction {
    _typeName?: "Telegram.type.SendMessageGeoLocationAction";
}
export interface SendMessageChooseContactAction {
    _typeName?: "Telegram.type.SendMessageChooseContactAction";
}
export interface SendMessageGamePlayAction {
    _typeName?: "Telegram.type.SendMessageGamePlayAction";
}
export type TMtpSendMessageAction = SendMessageTypingAction | SendMessageCancelAction | SendMessageRecordVideoAction | SendMessageUploadVideoAction | SendMessageRecordAudioAction | SendMessageUploadAudioAction | SendMessageUploadPhotoAction | SendMessageUploadDocumentAction | SendMessageGeoLocationAction | SendMessageChooseContactAction | SendMessageGamePlayAction;
export interface ContactsFound {
    _typeName?: "Telegram.type.ContactsFound";
    results: IMtpVector<TMtpPeer>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export type TMtpContacts$Found = ContactsFound;
export interface InputPrivacyKeyStatusTimestamp {
    _typeName?: "Telegram.type.InputPrivacyKeyStatusTimestamp";
}
export interface InputPrivacyKeyChatInvite {
    _typeName?: "Telegram.type.InputPrivacyKeyChatInvite";
}
export type TMtpInputPrivacyKey = InputPrivacyKeyStatusTimestamp | InputPrivacyKeyChatInvite;
export interface PrivacyKeyStatusTimestamp {
    _typeName?: "Telegram.type.PrivacyKeyStatusTimestamp";
}
export interface PrivacyKeyChatInvite {
    _typeName?: "Telegram.type.PrivacyKeyChatInvite";
}
export type TMtpPrivacyKey = PrivacyKeyStatusTimestamp | PrivacyKeyChatInvite;
export interface InputPrivacyValueAllowContacts {
    _typeName?: "Telegram.type.InputPrivacyValueAllowContacts";
}
export interface InputPrivacyValueAllowAll {
    _typeName?: "Telegram.type.InputPrivacyValueAllowAll";
}
export interface InputPrivacyValueAllowUsers {
    _typeName?: "Telegram.type.InputPrivacyValueAllowUsers";
    users: IMtpVector<InputUser>;
}
export interface InputPrivacyValueDisallowContacts {
    _typeName?: "Telegram.type.InputPrivacyValueDisallowContacts";
}
export interface InputPrivacyValueDisallowAll {
    _typeName?: "Telegram.type.InputPrivacyValueDisallowAll";
}
export interface InputPrivacyValueDisallowUsers {
    _typeName?: "Telegram.type.InputPrivacyValueDisallowUsers";
    users: IMtpVector<InputUser>;
}
export type TMtpInputPrivacyRule = InputPrivacyValueAllowContacts | InputPrivacyValueAllowAll | InputPrivacyValueAllowUsers | InputPrivacyValueDisallowContacts | InputPrivacyValueDisallowAll | InputPrivacyValueDisallowUsers;
export interface PrivacyValueAllowContacts {
    _typeName?: "Telegram.type.PrivacyValueAllowContacts";
}
export interface PrivacyValueAllowAll {
    _typeName?: "Telegram.type.PrivacyValueAllowAll";
}
export interface PrivacyValueAllowUsers {
    _typeName?: "Telegram.type.PrivacyValueAllowUsers";
    users: IMtpVector<number>;
}
export interface PrivacyValueDisallowContacts {
    _typeName?: "Telegram.type.PrivacyValueDisallowContacts";
}
export interface PrivacyValueDisallowAll {
    _typeName?: "Telegram.type.PrivacyValueDisallowAll";
}
export interface PrivacyValueDisallowUsers {
    _typeName?: "Telegram.type.PrivacyValueDisallowUsers";
    users: IMtpVector<number>;
}
export type TMtpPrivacyRule = PrivacyValueAllowContacts | PrivacyValueAllowAll | PrivacyValueAllowUsers | PrivacyValueDisallowContacts | PrivacyValueDisallowAll | PrivacyValueDisallowUsers;
export interface AccountPrivacyRules {
    _typeName?: "Telegram.type.AccountPrivacyRules";
    rules: IMtpVector<TMtpPrivacyRule>;
    users: IMtpVector<User>;
}
export type TMtpAccount$PrivacyRules = AccountPrivacyRules;
export interface AccountDaysTtl {
    _typeName?: "Telegram.type.AccountDaysTtl";
    days: number;
}
export type TMtpAccountDaysTTL = AccountDaysTtl;
export interface DocumentAttributeImageSize {
    _typeName?: "Telegram.type.DocumentAttributeImageSize";
    w: number;
    h: number;
}
export interface DocumentAttributeAnimated {
    _typeName?: "Telegram.type.DocumentAttributeAnimated";
}
export interface DocumentAttributeSticker {
    _typeName?: "Telegram.type.DocumentAttributeSticker";
    flags: number;
    mask?: true;
    alt: string;
    stickerset: TMtpInputStickerSet;
    mask_coords?: MaskCoords;
}
export interface DocumentAttributeVideo {
    _typeName?: "Telegram.type.DocumentAttributeVideo";
    duration: number;
    w: number;
    h: number;
}
export interface DocumentAttributeAudio {
    _typeName?: "Telegram.type.DocumentAttributeAudio";
    flags: number;
    voice?: true;
    duration: number;
    title?: string;
    performer?: string;
    waveform?: bytes;
}
export interface DocumentAttributeFilename {
    _typeName?: "Telegram.type.DocumentAttributeFilename";
    file_name: string;
}
export interface DocumentAttributeHasStickers {
    _typeName?: "Telegram.type.DocumentAttributeHasStickers";
}
export type TMtpDocumentAttribute = DocumentAttributeImageSize | DocumentAttributeAnimated | DocumentAttributeSticker | DocumentAttributeVideo | DocumentAttributeAudio | DocumentAttributeFilename | DocumentAttributeHasStickers;
export interface MessagesStickersNotModified {
    _typeName?: "Telegram.type.MessagesStickersNotModified";
}
export interface MessagesStickers {
    _typeName?: "Telegram.type.MessagesStickers";
    hash: string;
    stickers: IMtpVector<Document>;
}
export type TMtpMessages$Stickers = MessagesStickersNotModified | MessagesStickers;
export interface StickerPack {
    _typeName?: "Telegram.type.StickerPack";
    emoticon: string;
    documents: IMtpVector<long>;
}
export type TMtpStickerPack = StickerPack;
export interface MessagesAllStickersNotModified {
    _typeName?: "Telegram.type.MessagesAllStickersNotModified";
}
export interface MessagesAllStickers {
    _typeName?: "Telegram.type.MessagesAllStickers";
    hash: number;
    sets: IMtpVector<StickerSet>;
}
export type TMtpMessages$AllStickers = MessagesAllStickersNotModified | MessagesAllStickers;
export interface DisabledFeature {
    _typeName?: "Telegram.type.DisabledFeature";
    feature: string;
    description: string;
}
export type TMtpDisabledFeature = DisabledFeature;
export interface MessagesAffectedMessages {
    _typeName?: "Telegram.type.MessagesAffectedMessages";
    pts: number;
    pts_count: number;
}
export type TMtpMessages$AffectedMessages = MessagesAffectedMessages;
export interface ContactLinkUnknown {
    _typeName?: "Telegram.type.ContactLinkUnknown";
}
export interface ContactLinkNone {
    _typeName?: "Telegram.type.ContactLinkNone";
}
export interface ContactLinkHasPhone {
    _typeName?: "Telegram.type.ContactLinkHasPhone";
}
export interface ContactLinkContact {
    _typeName?: "Telegram.type.ContactLinkContact";
}
export type TMtpContactLink = ContactLinkUnknown | ContactLinkNone | ContactLinkHasPhone | ContactLinkContact;
export interface WebPageEmpty {
    _typeName?: "Telegram.type.WebPageEmpty";
    id: long;
}
export interface WebPagePending {
    _typeName?: "Telegram.type.WebPagePending";
    id: long;
    date: number;
}
export interface WebPage {
    _typeName?: "Telegram.type.WebPage";
    flags: number;
    id: long;
    url: string;
    display_url: string;
    type?: string;
    site_name?: string;
    title?: string;
    description?: string;
    photo?: Photo;
    embed_url?: string;
    embed_type?: string;
    embed_width?: number;
    embed_height?: number;
    duration?: number;
    author?: string;
    document?: Document;
}
export type TMtpWebPage = WebPageEmpty | WebPagePending | WebPage;
export interface Authorization {
    _typeName?: "Telegram.type.Authorization";
    hash: long;
    flags: number;
    device_model: string;
    platform: string;
    system_version: string;
    api_id: number;
    app_name: string;
    app_version: string;
    date_created: number;
    date_active: number;
    ip: string;
    country: string;
    region: string;
}
export type TMtpAuthorization = Authorization;
export interface AccountAuthorizations {
    _typeName?: "Telegram.type.AccountAuthorizations";
    authorizations: IMtpVector<Authorization>;
}
export type TMtpAccount$Authorizations = AccountAuthorizations;
export interface AccountNoPassword {
    _typeName?: "Telegram.type.AccountNoPassword";
    new_salt: bytes;
    email_unconfirmed_pattern: string;
}
export interface AccountPassword {
    _typeName?: "Telegram.type.AccountPassword";
    current_salt: bytes;
    new_salt: bytes;
    hint: string;
    has_recovery: TMtpBool;
    email_unconfirmed_pattern: string;
}
export type TMtpAccount$Password = AccountNoPassword | AccountPassword;
export interface AccountPasswordSettings {
    _typeName?: "Telegram.type.AccountPasswordSettings";
    email: string;
}
export type TMtpAccount$PasswordSettings = AccountPasswordSettings;
export interface AccountPasswordInputSettings {
    _typeName?: "Telegram.type.AccountPasswordInputSettings";
    flags: number;
    new_salt?: bytes;
    new_password_hash?: bytes;
    hint?: string;
    email?: string;
}
export type TMtpAccount$PasswordInputSettings = AccountPasswordInputSettings;
export interface AuthPasswordRecovery {
    _typeName?: "Telegram.type.AuthPasswordRecovery";
    email_pattern: string;
}
export type TMtpAuth$PasswordRecovery = AuthPasswordRecovery;
export interface ReceivedNotifyMessage {
    _typeName?: "Telegram.type.ReceivedNotifyMessage";
    id: number;
    flags: number;
}
export type TMtpReceivedNotifyMessage = ReceivedNotifyMessage;
export interface ChatInviteEmpty {
    _typeName?: "Telegram.type.ChatInviteEmpty";
}
export interface ChatInviteExported {
    _typeName?: "Telegram.type.ChatInviteExported";
    link: string;
}
export type TMtpExportedChatInvite = ChatInviteEmpty | ChatInviteExported;
export interface ChatInviteAlready {
    _typeName?: "Telegram.type.ChatInviteAlready";
    chat: Chat;
}
export interface ChatInvite {
    _typeName?: "Telegram.type.ChatInvite";
    flags: number;
    channel?: true;
    broadcast?: true;
    public?: true;
    megagroup?: true;
    title: string;
    photo: ChatPhoto;
    participants_count: number;
    participants?: IMtpVector<User>;
}
export type TMtpChatInvite = ChatInviteAlready | ChatInvite;
export interface InputStickerSetEmpty {
    _typeName?: "Telegram.type.InputStickerSetEmpty";
}
export interface InputStickerSetId {
    _typeName?: "Telegram.type.InputStickerSetId";
    id: long;
    access_hash: long;
}
export interface InputStickerSetShortName {
    _typeName?: "Telegram.type.InputStickerSetShortName";
    short_name: string;
}
export type TMtpInputStickerSet = InputStickerSetEmpty | InputStickerSetId | InputStickerSetShortName;
export interface StickerSet {
    _typeName?: "Telegram.type.StickerSet";
    flags: number;
    installed?: true;
    archived?: true;
    official?: true;
    masks?: true;
    id: long;
    access_hash: long;
    title: string;
    short_name: string;
    count: number;
    hash: number;
}
export type TMtpStickerSet = StickerSet;
export interface MessagesStickerSet {
    _typeName?: "Telegram.type.MessagesStickerSet";
    set: StickerSet;
    packs: IMtpVector<StickerPack>;
    documents: IMtpVector<Document>;
}
export type TMtpMessages$StickerSet = MessagesStickerSet;
export interface BotCommand {
    _typeName?: "Telegram.type.BotCommand";
    command: string;
    description: string;
}
export type TMtpBotCommand = BotCommand;
export interface BotInfo {
    _typeName?: "Telegram.type.BotInfo";
    user_id: number;
    description: string;
    commands: IMtpVector<BotCommand>;
}
export type TMtpBotInfo = BotInfo;
export interface KeyboardButton {
    _typeName?: "Telegram.type.KeyboardButton";
    text: string;
}
export interface KeyboardButtonUrl {
    _typeName?: "Telegram.type.KeyboardButtonUrl";
    text: string;
    url: string;
}
export interface KeyboardButtonCallback {
    _typeName?: "Telegram.type.KeyboardButtonCallback";
    text: string;
    data: bytes;
}
export interface KeyboardButtonRequestPhone {
    _typeName?: "Telegram.type.KeyboardButtonRequestPhone";
    text: string;
}
export interface KeyboardButtonRequestGeoLocation {
    _typeName?: "Telegram.type.KeyboardButtonRequestGeoLocation";
    text: string;
}
export interface KeyboardButtonSwitchInline {
    _typeName?: "Telegram.type.KeyboardButtonSwitchInline";
    flags: number;
    same_peer?: true;
    text: string;
    query: string;
}
export interface KeyboardButtonGame {
    _typeName?: "Telegram.type.KeyboardButtonGame";
    text: string;
}
export type TMtpKeyboardButton = KeyboardButton | KeyboardButtonUrl | KeyboardButtonCallback | KeyboardButtonRequestPhone | KeyboardButtonRequestGeoLocation | KeyboardButtonSwitchInline | KeyboardButtonGame;
export interface KeyboardButtonRow {
    _typeName?: "Telegram.type.KeyboardButtonRow";
    buttons: IMtpVector<KeyboardButton>;
}
export type TMtpKeyboardButtonRow = KeyboardButtonRow;
export interface ReplyKeyboardHide {
    _typeName?: "Telegram.type.ReplyKeyboardHide";
    flags: number;
    selective?: true;
}
export interface ReplyKeyboardForceReply {
    _typeName?: "Telegram.type.ReplyKeyboardForceReply";
    flags: number;
    single_use?: true;
    selective?: true;
}
export interface ReplyKeyboardMarkup {
    _typeName?: "Telegram.type.ReplyKeyboardMarkup";
    flags: number;
    resize?: true;
    single_use?: true;
    selective?: true;
    rows: IMtpVector<KeyboardButtonRow>;
}
export interface ReplyInlineMarkup {
    _typeName?: "Telegram.type.ReplyInlineMarkup";
    rows: IMtpVector<KeyboardButtonRow>;
}
export type TMtpReplyMarkup = ReplyKeyboardHide | ReplyKeyboardForceReply | ReplyKeyboardMarkup | ReplyInlineMarkup;
export interface HelpAppChangelogEmpty {
    _typeName?: "Telegram.type.HelpAppChangelogEmpty";
}
export interface HelpAppChangelog {
    _typeName?: "Telegram.type.HelpAppChangelog";
    text: string;
}
export type TMtpHelp$AppChangelog = HelpAppChangelogEmpty | HelpAppChangelog;
export interface MessageEntityUnknown {
    _typeName?: "Telegram.type.MessageEntityUnknown";
    offset: number;
    length: number;
}
export interface MessageEntityMention {
    _typeName?: "Telegram.type.MessageEntityMention";
    offset: number;
    length: number;
}
export interface MessageEntityHashtag {
    _typeName?: "Telegram.type.MessageEntityHashtag";
    offset: number;
    length: number;
}
export interface MessageEntityBotCommand {
    _typeName?: "Telegram.type.MessageEntityBotCommand";
    offset: number;
    length: number;
}
export interface MessageEntityUrl {
    _typeName?: "Telegram.type.MessageEntityUrl";
    offset: number;
    length: number;
}
export interface MessageEntityEmail {
    _typeName?: "Telegram.type.MessageEntityEmail";
    offset: number;
    length: number;
}
export interface MessageEntityBold {
    _typeName?: "Telegram.type.MessageEntityBold";
    offset: number;
    length: number;
}
export interface MessageEntityItalic {
    _typeName?: "Telegram.type.MessageEntityItalic";
    offset: number;
    length: number;
}
export interface MessageEntityCode {
    _typeName?: "Telegram.type.MessageEntityCode";
    offset: number;
    length: number;
}
export interface MessageEntityPre {
    _typeName?: "Telegram.type.MessageEntityPre";
    offset: number;
    length: number;
    language: string;
}
export interface MessageEntityTextUrl {
    _typeName?: "Telegram.type.MessageEntityTextUrl";
    offset: number;
    length: number;
    url: string;
}
export interface MessageEntityMentionName {
    _typeName?: "Telegram.type.MessageEntityMentionName";
    offset: number;
    length: number;
    user_id: number;
}
export interface InputMessageEntityMentionName {
    _typeName?: "Telegram.type.InputMessageEntityMentionName";
    offset: number;
    length: number;
    user_id: InputUser;
}
export type TMtpMessageEntity = MessageEntityUnknown | MessageEntityMention | MessageEntityHashtag | MessageEntityBotCommand | MessageEntityUrl | MessageEntityEmail | MessageEntityBold | MessageEntityItalic | MessageEntityCode | MessageEntityPre | MessageEntityTextUrl | MessageEntityMentionName | InputMessageEntityMentionName;
export interface InputChannelEmpty {
    _typeName?: "Telegram.type.InputChannelEmpty";
}
export interface InputChannel {
    _typeName?: "Telegram.type.InputChannel";
    channel_id: number;
    access_hash: long;
}
export type TMtpInputChannel = InputChannelEmpty | InputChannel;
export interface ContactsResolvedPeer {
    _typeName?: "Telegram.type.ContactsResolvedPeer";
    peer: TMtpPeer;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export type TMtpContacts$ResolvedPeer = ContactsResolvedPeer;
export interface MessageRange {
    _typeName?: "Telegram.type.MessageRange";
    min_id: number;
    max_id: number;
}
export type TMtpMessageRange = MessageRange;
export interface UpdatesChannelDifferenceEmpty {
    _typeName?: "Telegram.type.UpdatesChannelDifferenceEmpty";
    flags: number;
    final?: true;
    pts: number;
    timeout?: number;
}
export interface UpdatesChannelDifferenceTooLong {
    _typeName?: "Telegram.type.UpdatesChannelDifferenceTooLong";
    flags: number;
    final?: true;
    pts: number;
    timeout?: number;
    top_message: number;
    read_inbox_max_id: number;
    read_outbox_max_id: number;
    unread_count: number;
    messages: IMtpVector<Message>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export interface UpdatesChannelDifference {
    _typeName?: "Telegram.type.UpdatesChannelDifference";
    flags: number;
    final?: true;
    pts: number;
    timeout?: number;
    new_messages: IMtpVector<Message>;
    other_updates: IMtpVector<TMtpUpdate>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export type TMtpUpdates$ChannelDifference = UpdatesChannelDifferenceEmpty | UpdatesChannelDifferenceTooLong | UpdatesChannelDifference;
export interface ChannelMessagesFilterEmpty {
    _typeName?: "Telegram.type.ChannelMessagesFilterEmpty";
}
export interface ChannelMessagesFilter {
    _typeName?: "Telegram.type.ChannelMessagesFilter";
    flags: number;
    exclude_new_messages?: true;
    ranges: IMtpVector<MessageRange>;
}
export type TMtpChannelMessagesFilter = ChannelMessagesFilterEmpty | ChannelMessagesFilter;
export interface ChannelParticipant {
    _typeName?: "Telegram.type.ChannelParticipant";
    user_id: number;
    date: number;
}
export interface ChannelParticipantSelf {
    _typeName?: "Telegram.type.ChannelParticipantSelf";
    user_id: number;
    inviter_id: number;
    date: number;
}
export interface ChannelParticipantModerator {
    _typeName?: "Telegram.type.ChannelParticipantModerator";
    user_id: number;
    inviter_id: number;
    date: number;
}
export interface ChannelParticipantEditor {
    _typeName?: "Telegram.type.ChannelParticipantEditor";
    user_id: number;
    inviter_id: number;
    date: number;
}
export interface ChannelParticipantKicked {
    _typeName?: "Telegram.type.ChannelParticipantKicked";
    user_id: number;
    kicked_by: number;
    date: number;
}
export interface ChannelParticipantCreator {
    _typeName?: "Telegram.type.ChannelParticipantCreator";
    user_id: number;
}
export type TMtpChannelParticipant = ChannelParticipant | ChannelParticipantSelf | ChannelParticipantModerator | ChannelParticipantEditor | ChannelParticipantKicked | ChannelParticipantCreator;
export interface ChannelParticipantsRecent {
    _typeName?: "Telegram.type.ChannelParticipantsRecent";
}
export interface ChannelParticipantsAdmins {
    _typeName?: "Telegram.type.ChannelParticipantsAdmins";
}
export interface ChannelParticipantsKicked {
    _typeName?: "Telegram.type.ChannelParticipantsKicked";
}
export interface ChannelParticipantsBots {
    _typeName?: "Telegram.type.ChannelParticipantsBots";
}
export type TMtpChannelParticipantsFilter = ChannelParticipantsRecent | ChannelParticipantsAdmins | ChannelParticipantsKicked | ChannelParticipantsBots;
export interface ChannelRoleEmpty {
    _typeName?: "Telegram.type.ChannelRoleEmpty";
}
export interface ChannelRoleModerator {
    _typeName?: "Telegram.type.ChannelRoleModerator";
}
export interface ChannelRoleEditor {
    _typeName?: "Telegram.type.ChannelRoleEditor";
}
export type TMtpChannelParticipantRole = ChannelRoleEmpty | ChannelRoleModerator | ChannelRoleEditor;
export interface ChannelsChannelParticipants {
    _typeName?: "Telegram.type.ChannelsChannelParticipants";
    count: number;
    participants: IMtpVector<ChannelParticipant>;
    users: IMtpVector<User>;
}
export type TMtpChannels$ChannelParticipants = ChannelsChannelParticipants;
export interface ChannelsChannelParticipant {
    _typeName?: "Telegram.type.ChannelsChannelParticipant";
    participant: ChannelParticipant;
    users: IMtpVector<User>;
}
export type TMtpChannels$ChannelParticipant = ChannelsChannelParticipant;
export interface HelpTermsOfService {
    _typeName?: "Telegram.type.HelpTermsOfService";
    text: string;
}
export type TMtpHelp$TermsOfService = HelpTermsOfService;
export interface FoundGif {
    _typeName?: "Telegram.type.FoundGif";
    url: string;
    thumb_url: string;
    content_url: string;
    content_type: string;
    w: number;
    h: number;
}
export interface FoundGifCached {
    _typeName?: "Telegram.type.FoundGifCached";
    url: string;
    photo: Photo;
    document: Document;
}
export type TMtpFoundGif = FoundGif | FoundGifCached;
export interface MessagesFoundGifs {
    _typeName?: "Telegram.type.MessagesFoundGifs";
    next_offset: number;
    results: IMtpVector<FoundGif>;
}
export type TMtpMessages$FoundGifs = MessagesFoundGifs;
export interface MessagesSavedGifsNotModified {
    _typeName?: "Telegram.type.MessagesSavedGifsNotModified";
}
export interface MessagesSavedGifs {
    _typeName?: "Telegram.type.MessagesSavedGifs";
    hash: number;
    gifs: IMtpVector<Document>;
}
export type TMtpMessages$SavedGifs = MessagesSavedGifsNotModified | MessagesSavedGifs;
export interface InputBotInlineMessageMediaAuto {
    _typeName?: "Telegram.type.InputBotInlineMessageMediaAuto";
    flags: number;
    caption: string;
    reply_markup?: TMtpReplyMarkup;
}
export interface InputBotInlineMessageText {
    _typeName?: "Telegram.type.InputBotInlineMessageText";
    flags: number;
    no_webpage?: true;
    message: string;
    entities?: IMtpVector<TMtpMessageEntity>;
    reply_markup?: TMtpReplyMarkup;
}
export interface InputBotInlineMessageMediaGeo {
    _typeName?: "Telegram.type.InputBotInlineMessageMediaGeo";
    flags: number;
    geo_point: InputGeoPoint;
    reply_markup?: TMtpReplyMarkup;
}
export interface InputBotInlineMessageMediaVenue {
    _typeName?: "Telegram.type.InputBotInlineMessageMediaVenue";
    flags: number;
    geo_point: InputGeoPoint;
    title: string;
    address: string;
    provider: string;
    venue_id: string;
    reply_markup?: TMtpReplyMarkup;
}
export interface InputBotInlineMessageMediaContact {
    _typeName?: "Telegram.type.InputBotInlineMessageMediaContact";
    flags: number;
    phone_number: string;
    first_name: string;
    last_name: string;
    reply_markup?: TMtpReplyMarkup;
}
export interface InputBotInlineMessageGame {
    _typeName?: "Telegram.type.InputBotInlineMessageGame";
    flags: number;
    reply_markup?: TMtpReplyMarkup;
}
export type TMtpInputBotInlineMessage = InputBotInlineMessageMediaAuto | InputBotInlineMessageText | InputBotInlineMessageMediaGeo | InputBotInlineMessageMediaVenue | InputBotInlineMessageMediaContact | InputBotInlineMessageGame;
export interface InputBotInlineResult {
    _typeName?: "Telegram.type.InputBotInlineResult";
    flags: number;
    id: string;
    type: string;
    title?: string;
    description?: string;
    url?: string;
    thumb_url?: string;
    content_url?: string;
    content_type?: string;
    w?: number;
    h?: number;
    duration?: number;
    send_message: TMtpInputBotInlineMessage;
}
export interface InputBotInlineResultPhoto {
    _typeName?: "Telegram.type.InputBotInlineResultPhoto";
    id: string;
    type: string;
    photo: InputPhoto;
    send_message: TMtpInputBotInlineMessage;
}
export interface InputBotInlineResultDocument {
    _typeName?: "Telegram.type.InputBotInlineResultDocument";
    flags: number;
    id: string;
    type: string;
    title?: string;
    description?: string;
    document: InputDocument;
    send_message: TMtpInputBotInlineMessage;
}
export interface InputBotInlineResultGame {
    _typeName?: "Telegram.type.InputBotInlineResultGame";
    id: string;
    short_name: string;
    send_message: TMtpInputBotInlineMessage;
}
export type TMtpInputBotInlineResult = InputBotInlineResult | InputBotInlineResultPhoto | InputBotInlineResultDocument | InputBotInlineResultGame;
export interface BotInlineMessageMediaAuto {
    _typeName?: "Telegram.type.BotInlineMessageMediaAuto";
    flags: number;
    caption: string;
    reply_markup?: TMtpReplyMarkup;
}
export interface BotInlineMessageText {
    _typeName?: "Telegram.type.BotInlineMessageText";
    flags: number;
    no_webpage?: true;
    message: string;
    entities?: IMtpVector<TMtpMessageEntity>;
    reply_markup?: TMtpReplyMarkup;
}
export interface BotInlineMessageMediaGeo {
    _typeName?: "Telegram.type.BotInlineMessageMediaGeo";
    flags: number;
    geo: GeoPoint;
    reply_markup?: TMtpReplyMarkup;
}
export interface BotInlineMessageMediaVenue {
    _typeName?: "Telegram.type.BotInlineMessageMediaVenue";
    flags: number;
    geo: GeoPoint;
    title: string;
    address: string;
    provider: string;
    venue_id: string;
    reply_markup?: TMtpReplyMarkup;
}
export interface BotInlineMessageMediaContact {
    _typeName?: "Telegram.type.BotInlineMessageMediaContact";
    flags: number;
    phone_number: string;
    first_name: string;
    last_name: string;
    reply_markup?: TMtpReplyMarkup;
}
export type TMtpBotInlineMessage = BotInlineMessageMediaAuto | BotInlineMessageText | BotInlineMessageMediaGeo | BotInlineMessageMediaVenue | BotInlineMessageMediaContact;
export interface BotInlineResult {
    _typeName?: "Telegram.type.BotInlineResult";
    flags: number;
    id: string;
    type: string;
    title?: string;
    description?: string;
    url?: string;
    thumb_url?: string;
    content_url?: string;
    content_type?: string;
    w?: number;
    h?: number;
    duration?: number;
    send_message: TMtpBotInlineMessage;
}
export interface BotInlineMediaResult {
    _typeName?: "Telegram.type.BotInlineMediaResult";
    flags: number;
    id: string;
    type: string;
    photo?: Photo;
    document?: Document;
    title?: string;
    description?: string;
    send_message: TMtpBotInlineMessage;
}
export type TMtpBotInlineResult = BotInlineResult | BotInlineMediaResult;
export interface MessagesBotResults {
    _typeName?: "Telegram.type.MessagesBotResults";
    flags: number;
    gallery?: true;
    query_id: long;
    next_offset?: string;
    switch_pm?: TMtpInlineBotSwitchPM;
    results: IMtpVector<BotInlineResult>;
}
export type TMtpMessages$BotResults = MessagesBotResults;
export interface ExportedMessageLink {
    _typeName?: "Telegram.type.ExportedMessageLink";
    link: string;
}
export type TMtpExportedMessageLink = ExportedMessageLink;
export interface MessageFwdHeader {
    _typeName?: "Telegram.type.MessageFwdHeader";
    flags: number;
    from_id?: number;
    date: number;
    channel_id?: number;
    channel_post?: number;
}
export type TMtpMessageFwdHeader = MessageFwdHeader;
export interface AuthCodeTypeSms {
    _typeName?: "Telegram.type.AuthCodeTypeSms";
}
export interface AuthCodeTypeCall {
    _typeName?: "Telegram.type.AuthCodeTypeCall";
}
export interface AuthCodeTypeFlashCall {
    _typeName?: "Telegram.type.AuthCodeTypeFlashCall";
}
export type TMtpAuth$CodeType = AuthCodeTypeSms | AuthCodeTypeCall | AuthCodeTypeFlashCall;
export interface AuthSentCodeTypeApp {
    _typeName?: "Telegram.type.AuthSentCodeTypeApp";
    length: number;
}
export interface AuthSentCodeTypeSms {
    _typeName?: "Telegram.type.AuthSentCodeTypeSms";
    length: number;
}
export interface AuthSentCodeTypeCall {
    _typeName?: "Telegram.type.AuthSentCodeTypeCall";
    length: number;
}
export interface AuthSentCodeTypeFlashCall {
    _typeName?: "Telegram.type.AuthSentCodeTypeFlashCall";
    pattern: string;
}
export type TMtpAuth$SentCodeType = AuthSentCodeTypeApp | AuthSentCodeTypeSms | AuthSentCodeTypeCall | AuthSentCodeTypeFlashCall;
export interface MessagesBotCallbackAnswer {
    _typeName?: "Telegram.type.MessagesBotCallbackAnswer";
    flags: number;
    alert?: true;
    has_url?: true;
    message?: string;
    url?: string;
}
export type TMtpMessages$BotCallbackAnswer = MessagesBotCallbackAnswer;
export interface MessagesMessageEditData {
    _typeName?: "Telegram.type.MessagesMessageEditData";
    flags: number;
    caption?: true;
}
export type TMtpMessages$MessageEditData = MessagesMessageEditData;
export interface InputBotInlineMessageId {
    _typeName?: "Telegram.type.InputBotInlineMessageId";
    dc_id: number;
    id: long;
    access_hash: long;
}
export type TMtpInputBotInlineMessageID = InputBotInlineMessageId;
export interface InlineBotSwitchPm {
    _typeName?: "Telegram.type.InlineBotSwitchPm";
    text: string;
    start_param: string;
}
export type TMtpInlineBotSwitchPM = InlineBotSwitchPm;
export interface MessagesPeerDialogs {
    _typeName?: "Telegram.type.MessagesPeerDialogs";
    dialogs: IMtpVector<Dialog>;
    messages: IMtpVector<Message>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
    state: TMtpUpdates$State;
}
export type TMtpMessages$PeerDialogs = MessagesPeerDialogs;
export interface TopPeer {
    _typeName?: "Telegram.type.TopPeer";
    peer: TMtpPeer;
    rating: double;
}
export type TMtpTopPeer = TopPeer;
export interface TopPeerCategoryBotsPm {
    _typeName?: "Telegram.type.TopPeerCategoryBotsPm";
}
export interface TopPeerCategoryBotsInline {
    _typeName?: "Telegram.type.TopPeerCategoryBotsInline";
}
export interface TopPeerCategoryCorrespondents {
    _typeName?: "Telegram.type.TopPeerCategoryCorrespondents";
}
export interface TopPeerCategoryGroups {
    _typeName?: "Telegram.type.TopPeerCategoryGroups";
}
export interface TopPeerCategoryChannels {
    _typeName?: "Telegram.type.TopPeerCategoryChannels";
}
export type TMtpTopPeerCategory = TopPeerCategoryBotsPm | TopPeerCategoryBotsInline | TopPeerCategoryCorrespondents | TopPeerCategoryGroups | TopPeerCategoryChannels;
export interface TopPeerCategoryPeers {
    _typeName?: "Telegram.type.TopPeerCategoryPeers";
    category: TMtpTopPeerCategory;
    count: number;
    peers: IMtpVector<TopPeer>;
}
export type TMtpTopPeerCategoryPeers = TopPeerCategoryPeers;
export interface ContactsTopPeersNotModified {
    _typeName?: "Telegram.type.ContactsTopPeersNotModified";
}
export interface ContactsTopPeers {
    _typeName?: "Telegram.type.ContactsTopPeers";
    categories: IMtpVector<TopPeerCategoryPeers>;
    chats: IMtpVector<Chat>;
    users: IMtpVector<User>;
}
export type TMtpContacts$TopPeers = ContactsTopPeersNotModified | ContactsTopPeers;
export interface DraftMessageEmpty {
    _typeName?: "Telegram.type.DraftMessageEmpty";
}
export interface DraftMessage {
    _typeName?: "Telegram.type.DraftMessage";
    flags: number;
    no_webpage?: true;
    reply_to_msg_id?: number;
    message: string;
    entities?: IMtpVector<TMtpMessageEntity>;
    date: number;
}
export type TMtpDraftMessage = DraftMessageEmpty | DraftMessage;
export interface MessagesFeaturedStickersNotModified {
    _typeName?: "Telegram.type.MessagesFeaturedStickersNotModified";
}
export interface MessagesFeaturedStickers {
    _typeName?: "Telegram.type.MessagesFeaturedStickers";
    hash: number;
    sets: IMtpVector<StickerSetCovered>;
    unread: IMtpVector<long>;
}
export type TMtpMessages$FeaturedStickers = MessagesFeaturedStickersNotModified | MessagesFeaturedStickers;
export interface MessagesRecentStickersNotModified {
    _typeName?: "Telegram.type.MessagesRecentStickersNotModified";
}
export interface MessagesRecentStickers {
    _typeName?: "Telegram.type.MessagesRecentStickers";
    hash: number;
    stickers: IMtpVector<Document>;
}
export type TMtpMessages$RecentStickers = MessagesRecentStickersNotModified | MessagesRecentStickers;
export interface MessagesArchivedStickers {
    _typeName?: "Telegram.type.MessagesArchivedStickers";
    count: number;
    sets: IMtpVector<StickerSetCovered>;
}
export type TMtpMessages$ArchivedStickers = MessagesArchivedStickers;
export interface MessagesStickerSetInstallResultSuccess {
    _typeName?: "Telegram.type.MessagesStickerSetInstallResultSuccess";
}
export interface MessagesStickerSetInstallResultArchive {
    _typeName?: "Telegram.type.MessagesStickerSetInstallResultArchive";
    sets: IMtpVector<StickerSetCovered>;
}
export type TMtpMessages$StickerSetInstallResult = MessagesStickerSetInstallResultSuccess | MessagesStickerSetInstallResultArchive;
export interface StickerSetCovered {
    _typeName?: "Telegram.type.StickerSetCovered";
    set: StickerSet;
    cover: Document;
}
export interface StickerSetMultiCovered {
    _typeName?: "Telegram.type.StickerSetMultiCovered";
    set: StickerSet;
    covers: IMtpVector<Document>;
}
export type TMtpStickerSetCovered = StickerSetCovered | StickerSetMultiCovered;
export interface MaskCoords {
    _typeName?: "Telegram.type.MaskCoords";
    n: number;
    x: double;
    y: double;
    zoom: double;
}
export type TMtpMaskCoords = MaskCoords;
export interface InputStickeredMediaPhoto {
    _typeName?: "Telegram.type.InputStickeredMediaPhoto";
    id: InputPhoto;
}
export interface InputStickeredMediaDocument {
    _typeName?: "Telegram.type.InputStickeredMediaDocument";
    id: InputDocument;
}
export type TMtpInputStickeredMedia = InputStickeredMediaPhoto | InputStickeredMediaDocument;
export interface Game {
    _typeName?: "Telegram.type.Game";
    flags: number;
    id: long;
    access_hash: long;
    short_name: string;
    title: string;
    description: string;
    photo: Photo;
    document?: Document;
}
export type TMtpGame = Game;
export interface InputGameId {
    _typeName?: "Telegram.type.InputGameId";
    id: long;
    access_hash: long;
}
export interface InputGameShortName {
    _typeName?: "Telegram.type.InputGameShortName";
    bot_id: InputUser;
    short_name: string;
}
export type TMtpInputGame = InputGameId | InputGameShortName;
export interface HighScore {
    _typeName?: "Telegram.type.HighScore";
    pos: number;
    user_id: number;
    score: number;
}
export type TMtpHighScore = HighScore;
export interface MessagesHighScores {
    _typeName?: "Telegram.type.MessagesHighScores";
    scores: IMtpVector<HighScore>;
    users: IMtpVector<User>;
}
export type TMtpMessages$HighScores = MessagesHighScores;

