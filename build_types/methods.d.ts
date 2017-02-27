export interface IMtpVector<T> {
    list: T[];
}
type double = number;
type long = number;
type bytes = any;
import { TMtpBool, BoolFalse, BoolTrue, True, Error, Null, TMtpInputPeer, InputPeerEmpty, InputPeerSelf, InputPeerChat, InputPeerUser, InputPeerChannel, InputUser, InputUserEmpty, InputUserSelf, TMtpInputContact, InputPhoneContact, InputFile, InputFileBig, TMtpInputMedia, InputMediaEmpty, InputMediaUploadedPhoto, InputMediaPhoto, InputMediaGeoPoint, InputMediaContact, InputMediaUploadedDocument, InputMediaUploadedThumbDocument, InputMediaDocument, InputMediaVenue, InputMediaGifExternal, InputMediaPhotoExternal, InputMediaDocumentExternal, InputMediaGame, InputChatPhoto, InputChatPhotoEmpty, InputChatUploadedPhoto, InputGeoPoint, InputGeoPointEmpty, InputPhoto, InputPhotoEmpty, InputFileLocation, InputEncryptedFileLocation, InputDocumentFileLocation, InputAppEvent, TMtpPeer, PeerUser, PeerChat, PeerChannel, TMtpStorage$FileType, StorageFileUnknown, StorageFileJpeg, StorageFileGif, StorageFilePng, StorageFilePdf, StorageFileMp3, StorageFileMov, StorageFilePartial, StorageFileMp4, StorageFileWebp, FileLocation, FileLocationUnavailable, User, UserEmpty, UserProfilePhoto, UserProfilePhotoEmpty, TMtpUserStatus, UserStatusEmpty, UserStatusOnline, UserStatusOffline, UserStatusRecently, UserStatusLastWeek, UserStatusLastMonth, Chat, ChatEmpty, ChatForbidden, Channel, ChannelForbidden, ChatFull, ChannelFull, ChatParticipant, ChatParticipantCreator, ChatParticipantAdmin, ChatParticipants, ChatParticipantsForbidden, ChatPhoto, ChatPhotoEmpty, Message, MessageEmpty, MessageService, TMtpMessageMedia, MessageMediaEmpty, MessageMediaPhoto, MessageMediaGeo, MessageMediaContact, MessageMediaUnsupported, MessageMediaDocument, MessageMediaWebPage, MessageMediaVenue, MessageMediaGame, TMtpMessageAction, MessageActionEmpty, MessageActionChatCreate, MessageActionChatEditTitle, MessageActionChatEditPhoto, MessageActionChatDeletePhoto, MessageActionChatAddUser, MessageActionChatDeleteUser, MessageActionChatJoinedByLink, MessageActionChannelCreate, MessageActionChatMigrateTo, MessageActionChannelMigrateFrom, MessageActionPinMessage, MessageActionHistoryClear, MessageActionGameScore, Dialog, Photo, PhotoEmpty, PhotoSize, PhotoSizeEmpty, PhotoCachedSize, GeoPoint, GeoPointEmpty, TMtpAuth$CheckedPhone, AuthCheckedPhone, TMtpAuth$SentCode, AuthSentCode, TMtpAuth$Authorization, AuthAuthorization, TMtpAuth$ExportedAuthorization, AuthExportedAuthorization, InputNotifyPeer, InputNotifyUsers, InputNotifyChats, InputNotifyAll, TMtpInputPeerNotifyEvents, InputPeerNotifyEventsEmpty, InputPeerNotifyEventsAll, InputPeerNotifySettings, TMtpPeerNotifyEvents, PeerNotifyEventsEmpty, PeerNotifyEventsAll, PeerNotifySettings, PeerNotifySettingsEmpty, PeerSettings, WallPaper, WallPaperSolid, TMtpReportReason, InputReportReasonSpam, InputReportReasonViolence, InputReportReasonPornography, InputReportReasonOther, UserFull, Contact, ImportedContact, ContactBlocked, ContactStatus, TMtpContacts$Link, ContactsLink, TMtpContacts$Contacts, ContactsContactsNotModified, ContactsContacts, TMtpContacts$ImportedContacts, ContactsImportedContacts, TMtpContacts$Blocked, ContactsBlocked, ContactsBlockedSlice, TMtpMessages$Dialogs, MessagesDialogs, MessagesDialogsSlice, TMtpMessages$Messages, MessagesMessages, MessagesMessagesSlice, MessagesChannelMessages, TMtpMessages$Chats, MessagesChats, TMtpMessages$ChatFull, MessagesChatFull, TMtpMessages$AffectedHistory, MessagesAffectedHistory, TMtpMessagesFilter, InputMessagesFilterEmpty, InputMessagesFilterPhotos, InputMessagesFilterVideo, InputMessagesFilterPhotoVideo, InputMessagesFilterPhotoVideoDocuments, InputMessagesFilterDocument, InputMessagesFilterUrl, InputMessagesFilterGif, InputMessagesFilterVoice, InputMessagesFilterMusic, InputMessagesFilterChatPhotos, TMtpUpdate, UpdateNewMessage, UpdateMessageId, UpdateDeleteMessages, UpdateUserTyping, UpdateChatUserTyping, UpdateChatParticipants, UpdateUserStatus, UpdateUserName, UpdateUserPhoto, UpdateContactRegistered, UpdateContactLink, UpdateNewAuthorization, UpdateNewEncryptedMessage, UpdateEncryptedChatTyping, UpdateEncryption, UpdateEncryptedMessagesRead, UpdateChatParticipantAdd, UpdateChatParticipantDelete, UpdateDcOptions, UpdateUserBlocked, UpdateNotifySettings, UpdateServiceNotification, UpdatePrivacy, UpdateUserPhone, UpdateReadHistoryInbox, UpdateReadHistoryOutbox, UpdateWebPage, UpdateReadMessagesContents, UpdateChannelTooLong, UpdateChannel, UpdateNewChannelMessage, UpdateReadChannelInbox, UpdateDeleteChannelMessages, UpdateChannelMessageViews, UpdateChatAdmins, UpdateChatParticipantAdmin, UpdateNewStickerSet, UpdateStickerSetsOrder, UpdateStickerSets, UpdateSavedGifs, UpdateBotInlineQuery, UpdateBotInlineSend, UpdateEditChannelMessage, UpdateChannelPinnedMessage, UpdateBotCallbackQuery, UpdateEditMessage, UpdateInlineBotCallbackQuery, UpdateReadChannelOutbox, UpdateDraftMessage, UpdateReadFeaturedStickers, UpdateRecentStickers, UpdateConfig, UpdatePtsChanged, TMtpUpdates$State, UpdatesState, TMtpUpdates$Difference, UpdatesDifferenceEmpty, UpdatesDifference, UpdatesDifferenceSlice, Updates, UpdatesTooLong, UpdateShortMessage, UpdateShortChatMessage, UpdateShort, UpdatesCombined, UpdateShortSentMessage, TMtpPhotos$Photos, PhotosPhotos, PhotosPhotosSlice, TMtpPhotos$Photo, PhotosPhoto, TMtpUpload$File, UploadFile, DcOption, Config, NearestDc, TMtpHelp$AppUpdate, HelpAppUpdate, HelpNoAppUpdate, TMtpHelp$InviteText, HelpInviteText, EncryptedChat, EncryptedChatEmpty, EncryptedChatWaiting, EncryptedChatRequested, EncryptedChatDiscarded, InputEncryptedChat, EncryptedFile, EncryptedFileEmpty, InputEncryptedFile, InputEncryptedFileEmpty, InputEncryptedFileUploaded, InputEncryptedFileBigUploaded, EncryptedMessage, EncryptedMessageService, TMtpMessages$DhConfig, MessagesDhConfigNotModified, MessagesDhConfig, TMtpMessages$SentEncryptedMessage, MessagesSentEncryptedMessage, MessagesSentEncryptedFile, InputDocument, InputDocumentEmpty, Document, DocumentEmpty, TMtpHelp$Support, HelpSupport, NotifyPeer, NotifyUsers, NotifyChats, NotifyAll, TMtpSendMessageAction, SendMessageTypingAction, SendMessageCancelAction, SendMessageRecordVideoAction, SendMessageUploadVideoAction, SendMessageRecordAudioAction, SendMessageUploadAudioAction, SendMessageUploadPhotoAction, SendMessageUploadDocumentAction, SendMessageGeoLocationAction, SendMessageChooseContactAction, SendMessageGamePlayAction, TMtpContacts$Found, ContactsFound, TMtpInputPrivacyKey, InputPrivacyKeyStatusTimestamp, InputPrivacyKeyChatInvite, TMtpPrivacyKey, PrivacyKeyStatusTimestamp, PrivacyKeyChatInvite, TMtpInputPrivacyRule, InputPrivacyValueAllowContacts, InputPrivacyValueAllowAll, InputPrivacyValueAllowUsers, InputPrivacyValueDisallowContacts, InputPrivacyValueDisallowAll, InputPrivacyValueDisallowUsers, TMtpPrivacyRule, PrivacyValueAllowContacts, PrivacyValueAllowAll, PrivacyValueAllowUsers, PrivacyValueDisallowContacts, PrivacyValueDisallowAll, PrivacyValueDisallowUsers, TMtpAccount$PrivacyRules, AccountPrivacyRules, TMtpAccountDaysTTL, AccountDaysTtl, TMtpDocumentAttribute, DocumentAttributeImageSize, DocumentAttributeAnimated, DocumentAttributeSticker, DocumentAttributeVideo, DocumentAttributeAudio, DocumentAttributeFilename, DocumentAttributeHasStickers, TMtpMessages$Stickers, MessagesStickersNotModified, MessagesStickers, StickerPack, TMtpMessages$AllStickers, MessagesAllStickersNotModified, MessagesAllStickers, DisabledFeature, TMtpMessages$AffectedMessages, MessagesAffectedMessages, TMtpContactLink, ContactLinkUnknown, ContactLinkNone, ContactLinkHasPhone, ContactLinkContact, WebPage, WebPageEmpty, WebPagePending, Authorization, TMtpAccount$Authorizations, AccountAuthorizations, TMtpAccount$Password, AccountNoPassword, AccountPassword, TMtpAccount$PasswordSettings, AccountPasswordSettings, TMtpAccount$PasswordInputSettings, AccountPasswordInputSettings, TMtpAuth$PasswordRecovery, AuthPasswordRecovery, ReceivedNotifyMessage, TMtpExportedChatInvite, ChatInviteEmpty, ChatInviteExported, ChatInvite, ChatInviteAlready, TMtpInputStickerSet, InputStickerSetEmpty, InputStickerSetId, InputStickerSetShortName, StickerSet, TMtpMessages$StickerSet, MessagesStickerSet, BotCommand, BotInfo, KeyboardButton, KeyboardButtonUrl, KeyboardButtonCallback, KeyboardButtonRequestPhone, KeyboardButtonRequestGeoLocation, KeyboardButtonSwitchInline, KeyboardButtonGame, KeyboardButtonRow, TMtpReplyMarkup, ReplyKeyboardHide, ReplyKeyboardForceReply, ReplyKeyboardMarkup, ReplyInlineMarkup, TMtpHelp$AppChangelog, HelpAppChangelogEmpty, HelpAppChangelog, TMtpMessageEntity, MessageEntityUnknown, MessageEntityMention, MessageEntityHashtag, MessageEntityBotCommand, MessageEntityUrl, MessageEntityEmail, MessageEntityBold, MessageEntityItalic, MessageEntityCode, MessageEntityPre, MessageEntityTextUrl, MessageEntityMentionName, InputMessageEntityMentionName, InputChannel, InputChannelEmpty, TMtpContacts$ResolvedPeer, ContactsResolvedPeer, MessageRange, TMtpUpdates$ChannelDifference, UpdatesChannelDifferenceEmpty, UpdatesChannelDifferenceTooLong, UpdatesChannelDifference, ChannelMessagesFilter, ChannelMessagesFilterEmpty, ChannelParticipant, ChannelParticipantSelf, ChannelParticipantModerator, ChannelParticipantEditor, ChannelParticipantKicked, ChannelParticipantCreator, TMtpChannelParticipantsFilter, ChannelParticipantsRecent, ChannelParticipantsAdmins, ChannelParticipantsKicked, ChannelParticipantsBots, TMtpChannelParticipantRole, ChannelRoleEmpty, ChannelRoleModerator, ChannelRoleEditor, TMtpChannels$ChannelParticipants, ChannelsChannelParticipants, TMtpChannels$ChannelParticipant, ChannelsChannelParticipant, TMtpHelp$TermsOfService, HelpTermsOfService, FoundGif, FoundGifCached, TMtpMessages$FoundGifs, MessagesFoundGifs, TMtpMessages$SavedGifs, MessagesSavedGifsNotModified, MessagesSavedGifs, TMtpInputBotInlineMessage, InputBotInlineMessageMediaAuto, InputBotInlineMessageText, InputBotInlineMessageMediaGeo, InputBotInlineMessageMediaVenue, InputBotInlineMessageMediaContact, InputBotInlineMessageGame, InputBotInlineResult, InputBotInlineResultPhoto, InputBotInlineResultDocument, InputBotInlineResultGame, TMtpBotInlineMessage, BotInlineMessageMediaAuto, BotInlineMessageText, BotInlineMessageMediaGeo, BotInlineMessageMediaVenue, BotInlineMessageMediaContact, BotInlineResult, BotInlineMediaResult, TMtpMessages$BotResults, MessagesBotResults, ExportedMessageLink, MessageFwdHeader, TMtpAuth$CodeType, AuthCodeTypeSms, AuthCodeTypeCall, AuthCodeTypeFlashCall, TMtpAuth$SentCodeType, AuthSentCodeTypeApp, AuthSentCodeTypeSms, AuthSentCodeTypeCall, AuthSentCodeTypeFlashCall, TMtpMessages$BotCallbackAnswer, MessagesBotCallbackAnswer, TMtpMessages$MessageEditData, MessagesMessageEditData, TMtpInputBotInlineMessageID, InputBotInlineMessageId, TMtpInlineBotSwitchPM, InlineBotSwitchPm, TMtpMessages$PeerDialogs, MessagesPeerDialogs, TopPeer, TMtpTopPeerCategory, TopPeerCategoryBotsPm, TopPeerCategoryBotsInline, TopPeerCategoryCorrespondents, TopPeerCategoryGroups, TopPeerCategoryChannels, TopPeerCategoryPeers, TMtpContacts$TopPeers, ContactsTopPeersNotModified, ContactsTopPeers, DraftMessage, DraftMessageEmpty, TMtpMessages$FeaturedStickers, MessagesFeaturedStickersNotModified, MessagesFeaturedStickers, TMtpMessages$RecentStickers, MessagesRecentStickersNotModified, MessagesRecentStickers, TMtpMessages$ArchivedStickers, MessagesArchivedStickers, TMtpMessages$StickerSetInstallResult, MessagesStickerSetInstallResultSuccess, MessagesStickerSetInstallResultArchive, StickerSetCovered, StickerSetMultiCovered, MaskCoords, TMtpInputStickeredMedia, InputStickeredMediaPhoto, InputStickeredMediaDocument, Game, TMtpInputGame, InputGameId, InputGameShortName, HighScore, TMtpMessages$HighScores, MessagesHighScores } from "./types";
export interface InvokeAfterMsg {
    msg_id: long;
    query: any;
}
export interface InvokeAfterMsgs {
    msg_ids: IMtpVector<long>;
    query: any;
}
export interface InitConnection {
    api_id: number;
    device_model: string;
    system_version: string;
    app_version: string;
    lang_code: string;
    query: any;
}
export interface InvokeWithLayer {
    layer: number;
    query: any;
}
export interface InvokeWithoutUpdates {
    query: any;
}
export interface AuthCheckPhone {
    phone_number: string;
}
export interface AuthSendCode {
    flags?: number;
    allow_flashcall?: true;
    phone_number: string;
    current_number?: TMtpBool;
    api_id: number;
    api_hash: string;
}
export interface AccountSendChangePhoneCode {
    flags?: number;
    allow_flashcall?: true;
    phone_number: string;
    current_number?: TMtpBool;
}
export interface AuthResendCode {
    phone_number: string;
    phone_code_hash: string;
}
export interface AccountSendConfirmPhoneCode {
    flags?: number;
    allow_flashcall?: true;
    hash: string;
    current_number?: TMtpBool;
}
export interface AuthSignUp {
    phone_number: string;
    phone_code_hash: string;
    phone_code: string;
    first_name: string;
    last_name: string;
}
export interface AuthSignIn {
    phone_number: string;
    phone_code_hash: string;
    phone_code: string;
}
export interface AuthImportAuthorization {
    id: number;
    bytes: bytes;
}
export interface AuthImportBotAuthorization {
    flags?: number;
    api_id: number;
    api_hash: string;
    bot_auth_token: string;
}
export interface AuthCheckPassword {
    password_hash: bytes;
}
export interface AuthRecoverPassword {
    code: string;
}
export interface AuthLogOut {
}
export interface AuthResetAuthorizations {
}
export interface AuthSendInvites {
    phone_numbers: IMtpVector<string>;
    message: string;
}
export interface AuthBindTempAuthKey {
    perm_auth_key_id: long;
    nonce: long;
    expires_at: number;
    encrypted_message: bytes;
}
export interface AccountRegisterDevice {
    token_type: number;
    token: string;
}
export interface AccountUnregisterDevice {
    token_type: number;
    token: string;
}
export interface AccountUpdateNotifySettings {
    peer: InputNotifyPeer;
    settings: InputPeerNotifySettings;
}
export interface AccountResetNotifySettings {
}
export interface AccountUpdateStatus {
    offline: TMtpBool;
}
export interface AccountReportPeer {
    peer: TMtpInputPeer;
    reason: TMtpReportReason;
}
export interface ContactsDeleteContacts {
    id: IMtpVector<InputUser>;
}
export interface ContactsBlock {
    id: InputUser;
}
export interface ContactsUnblock {
    id: InputUser;
}
export interface MessagesSetTyping {
    peer: TMtpInputPeer;
    action: TMtpSendMessageAction;
}
export interface MessagesReportSpam {
    peer: TMtpInputPeer;
}
export interface MessagesHideReportSpam {
    peer: TMtpInputPeer;
}
export interface UploadSaveFilePart {
    file_id: long;
    file_part: number;
    bytes: bytes;
}
export interface HelpSaveAppLog {
    events: IMtpVector<InputAppEvent>;
}
export interface MessagesDiscardEncryption {
    chat_id: number;
}
export interface MessagesSetEncryptedTyping {
    peer: InputEncryptedChat;
    typing: TMtpBool;
}
export interface MessagesReadEncryptedHistory {
    peer: InputEncryptedChat;
    max_date: number;
}
export interface UploadSaveBigFilePart {
    file_id: long;
    file_part: number;
    file_total_parts: number;
    bytes: bytes;
}
export interface AccountCheckUsername {
    username: string;
}
export interface AccountDeleteAccount {
    reason: string;
}
export interface AccountSetAccountTtl {
    ttl: TMtpAccountDaysTTL;
}
export interface AccountUpdateDeviceLocked {
    period: number;
}
export interface AccountResetAuthorization {
    hash: long;
}
export interface AccountUpdatePasswordSettings {
    current_password_hash: bytes;
    new_settings: TMtpAccount$PasswordInputSettings;
}
export interface MessagesUninstallStickerSet {
    stickerset: TMtpInputStickerSet;
}
export interface ChannelsReadHistory {
    channel: InputChannel;
    max_id: number;
}
export interface ChannelsReportSpam {
    channel: InputChannel;
    user_id: InputUser;
    id: IMtpVector<number>;
}
export interface ChannelsEditAbout {
    channel: InputChannel;
    about: string;
}
export interface ChannelsCheckUsername {
    channel: InputChannel;
    username: string;
}
export interface ChannelsUpdateUsername {
    channel: InputChannel;
    username: string;
}
export interface MessagesEditChatAdmin {
    chat_id: number;
    user_id: InputUser;
    is_admin: TMtpBool;
}
export interface MessagesReorderStickerSets {
    flags?: number;
    masks?: true;
    order: IMtpVector<long>;
}
export interface MessagesSaveGif {
    id: InputDocument;
    unsave: TMtpBool;
}
export interface MessagesSetInlineBotResults {
    flags?: number;
    gallery?: true;
    private?: true;
    query_id: long;
    results: IMtpVector<InputBotInlineResult>;
    cache_time: number;
    next_offset?: string;
    switch_pm?: TMtpInlineBotSwitchPM;
}
export interface AuthCancelCode {
    phone_number: string;
    phone_code_hash: string;
}
export interface MessagesEditInlineBotMessage {
    flags?: number;
    no_webpage?: true;
    id: TMtpInputBotInlineMessageID;
    message?: string;
    reply_markup?: TMtpReplyMarkup;
    entities?: IMtpVector<TMtpMessageEntity>;
}
export interface MessagesSetBotCallbackAnswer {
    flags?: number;
    alert?: true;
    query_id: long;
    message?: string;
    url?: string;
}
export interface ContactsResetTopPeerRating {
    category: TMtpTopPeerCategory;
    peer: TMtpInputPeer;
}
export interface MessagesSaveDraft {
    flags?: number;
    no_webpage?: true;
    reply_to_msg_id?: number;
    peer: TMtpInputPeer;
    message: string;
    entities?: IMtpVector<TMtpMessageEntity>;
}
export interface MessagesReadFeaturedStickers {
    id: IMtpVector<long>;
}
export interface MessagesSaveRecentSticker {
    flags?: number;
    attached?: true;
    id: InputDocument;
    unsave: TMtpBool;
}
export interface MessagesClearRecentStickers {
    flags?: number;
    attached?: true;
}
export interface AccountConfirmPhone {
    phone_code_hash: string;
    phone_code: string;
}
export interface AuthDropTempAuthKeys {
    except_auth_keys: IMtpVector<long>;
}
export interface MessagesSetInlineGameScore {
    flags?: number;
    edit_message?: true;
    id: TMtpInputBotInlineMessageID;
    user_id: InputUser;
    score: number;
}
export interface AuthExportAuthorization {
    dc_id: number;
}
export interface AccountGetNotifySettings {
    peer: InputNotifyPeer;
}
export interface AccountUpdateProfile {
    flags?: number;
    first_name?: string;
    last_name?: string;
    about?: string;
}
export interface ContactsImportCard {
    export_card: IMtpVector<number>;
}
export interface AccountUpdateUsername {
    username: string;
}
export interface AccountChangePhone {
    phone_number: string;
    phone_code_hash: string;
    phone_code: string;
}
export interface AccountGetWallPapers {
}
export interface UsersGetUsers {
    id: IMtpVector<InputUser>;
}
export interface UsersGetFullUser {
    id: InputUser;
}
export interface ContactsGetStatuses {
}
export interface ContactsGetContacts {
    hash: string;
}
export interface ContactsImportContacts {
    contacts: IMtpVector<TMtpInputContact>;
    replace: TMtpBool;
}
export interface ContactsDeleteContact {
    id: InputUser;
}
export interface ContactsGetBlocked {
    offset: number;
    limit: number;
}
export interface ContactsExportCard {
}
export interface MessagesGetMessagesViews {
    peer: TMtpInputPeer;
    id: IMtpVector<number>;
    increment: TMtpBool;
}
export interface MessagesGetMessages {
    id: IMtpVector<number>;
}
export interface MessagesGetHistory {
    peer: TMtpInputPeer;
    offset_id: number;
    offset_date: number;
    add_offset: number;
    limit: number;
    max_id: number;
    min_id: number;
}
export interface MessagesSearch {
    flags?: number;
    peer: TMtpInputPeer;
    q: string;
    filter: TMtpMessagesFilter;
    min_date: number;
    max_date: number;
    offset: number;
    max_id: number;
    limit: number;
}
export interface ChannelsGetMessages {
    channel: InputChannel;
    id: IMtpVector<number>;
}
export interface MessagesSearchGlobal {
    q: string;
    offset_date: number;
    offset_peer: TMtpInputPeer;
    offset_id: number;
    limit: number;
}
export interface MessagesGetDialogs {
    offset_date: number;
    offset_id: number;
    offset_peer: TMtpInputPeer;
    limit: number;
}
export interface MessagesReadHistory {
    peer: TMtpInputPeer;
    max_id: number;
}
export interface MessagesDeleteMessages {
    id: IMtpVector<number>;
}
export interface MessagesReadMessageContents {
    id: IMtpVector<number>;
}
export interface ChannelsDeleteMessages {
    channel: InputChannel;
    id: IMtpVector<number>;
}
export interface MessagesDeleteHistory {
    flags?: number;
    just_clear?: true;
    peer: TMtpInputPeer;
    max_id: number;
}
export interface ChannelsDeleteUserHistory {
    channel: InputChannel;
    user_id: InputUser;
}
export interface MessagesReceivedMessages {
    max_id: number;
}
export interface MessagesSendMessage {
    flags?: number;
    no_webpage?: true;
    silent?: true;
    background?: true;
    clear_draft?: true;
    peer: TMtpInputPeer;
    reply_to_msg_id?: number;
    message: string;
    random_id: long;
    reply_markup?: TMtpReplyMarkup;
    entities?: IMtpVector<TMtpMessageEntity>;
}
export interface MessagesSendMedia {
    flags?: number;
    silent?: true;
    background?: true;
    clear_draft?: true;
    peer: TMtpInputPeer;
    reply_to_msg_id?: number;
    media: TMtpInputMedia;
    random_id: long;
    reply_markup?: TMtpReplyMarkup;
}
export interface MessagesForwardMessages {
    flags?: number;
    silent?: true;
    background?: true;
    with_my_score?: true;
    from_peer: TMtpInputPeer;
    id: IMtpVector<number>;
    random_id: IMtpVector<long>;
    to_peer: TMtpInputPeer;
}
export interface MessagesEditChatTitle {
    chat_id: number;
    title: string;
}
export interface MessagesEditChatPhoto {
    chat_id: number;
    photo: InputChatPhoto;
}
export interface MessagesAddChatUser {
    chat_id: number;
    user_id: InputUser;
    fwd_limit: number;
}
export interface MessagesDeleteChatUser {
    chat_id: number;
    user_id: InputUser;
}
export interface MessagesCreateChat {
    users: IMtpVector<InputUser>;
    title: string;
}
export interface MessagesForwardMessage {
    peer: TMtpInputPeer;
    id: number;
    random_id: long;
}
export interface MessagesImportChatInvite {
    hash: string;
}
export interface MessagesStartBot {
    bot: InputUser;
    peer: TMtpInputPeer;
    random_id: long;
    start_param: string;
}
export interface ChannelsCreateChannel {
    flags?: number;
    broadcast?: true;
    megagroup?: true;
    title: string;
    about: string;
}
export interface ChannelsEditAdmin {
    channel: InputChannel;
    user_id: InputUser;
    role: TMtpChannelParticipantRole;
}
export interface ChannelsEditTitle {
    channel: InputChannel;
    title: string;
}
export interface ChannelsEditPhoto {
    channel: InputChannel;
    photo: InputChatPhoto;
}
export interface ChannelsJoinChannel {
    channel: InputChannel;
}
export interface ChannelsLeaveChannel {
    channel: InputChannel;
}
export interface ChannelsInviteToChannel {
    channel: InputChannel;
    users: IMtpVector<InputUser>;
}
export interface ChannelsKickFromChannel {
    channel: InputChannel;
    user_id: InputUser;
    kicked: TMtpBool;
}
export interface ChannelsDeleteChannel {
    channel: InputChannel;
}
export interface MessagesToggleChatAdmins {
    chat_id: number;
    enabled: TMtpBool;
}
export interface MessagesMigrateChat {
    chat_id: number;
}
export interface MessagesSendInlineBotResult {
    flags?: number;
    silent?: true;
    background?: true;
    clear_draft?: true;
    peer: TMtpInputPeer;
    reply_to_msg_id?: number;
    random_id: long;
    query_id: long;
    id: string;
}
export interface ChannelsToggleInvites {
    channel: InputChannel;
    enabled: TMtpBool;
}
export interface ChannelsToggleSignatures {
    channel: InputChannel;
    enabled: TMtpBool;
}
export interface ChannelsUpdatePinnedMessage {
    flags?: number;
    silent?: true;
    channel: InputChannel;
    id: number;
}
export interface MessagesEditMessage {
    flags?: number;
    no_webpage?: true;
    peer: TMtpInputPeer;
    id: number;
    message?: string;
    reply_markup?: TMtpReplyMarkup;
    entities?: IMtpVector<TMtpMessageEntity>;
}
export interface MessagesGetAllDrafts {
}
export interface MessagesSetGameScore {
    flags?: number;
    edit_message?: true;
    peer: TMtpInputPeer;
    id: number;
    user_id: InputUser;
    score: number;
}
export interface MessagesGetPeerSettings {
    peer: TMtpInputPeer;
}
export interface MessagesGetChats {
    id: IMtpVector<number>;
}
export interface ChannelsGetChannels {
    id: IMtpVector<InputChannel>;
}
export interface ChannelsGetAdminedPublicChannels {
}
export interface MessagesGetFullChat {
    chat_id: number;
}
export interface ChannelsGetFullChannel {
    channel: InputChannel;
}
export interface UpdatesGetState {
}
export interface UpdatesGetDifference {
    pts: number;
    date: number;
    qts: number;
}
export interface PhotosUpdateProfilePhoto {
    id: InputPhoto;
}
export interface PhotosUploadProfilePhoto {
    file: InputFile;
}
export interface PhotosDeletePhotos {
    id: IMtpVector<InputPhoto>;
}
export interface MessagesReceivedQueue {
    max_qts: number;
}
export interface UploadGetFile {
    location: InputFileLocation;
    offset: number;
    limit: number;
}
export interface HelpGetConfig {
}
export interface HelpGetNearestDc {
}
export interface HelpGetAppUpdate {
}
export interface HelpGetInviteText {
}
export interface PhotosGetUserPhotos {
    user_id: InputUser;
    offset: number;
    max_id: long;
    limit: number;
}
export interface MessagesGetDhConfig {
    version: number;
    random_length: number;
}
export interface MessagesRequestEncryption {
    user_id: InputUser;
    random_id: number;
    g_a: bytes;
}
export interface MessagesAcceptEncryption {
    peer: InputEncryptedChat;
    g_b: bytes;
    key_fingerprint: long;
}
export interface MessagesSendEncrypted {
    peer: InputEncryptedChat;
    random_id: long;
    data: bytes;
}
export interface MessagesSendEncryptedFile {
    peer: InputEncryptedChat;
    random_id: long;
    data: bytes;
    file: InputEncryptedFile;
}
export interface MessagesSendEncryptedService {
    peer: InputEncryptedChat;
    random_id: long;
    data: bytes;
}
export interface HelpGetSupport {
}
export interface ContactsSearch {
    q: string;
    limit: number;
}
export interface AccountGetPrivacy {
    key: TMtpInputPrivacyKey;
}
export interface AccountSetPrivacy {
    key: TMtpInputPrivacyKey;
    rules: IMtpVector<TMtpInputPrivacyRule>;
}
export interface AccountGetAccountTtl {
}
export interface ContactsResolveUsername {
    username: string;
}
export interface MessagesGetAllStickers {
    hash: number;
}
export interface MessagesGetMaskStickers {
    hash: number;
}
export interface MessagesGetWebPagePreview {
    message: string;
}
export interface AccountGetAuthorizations {
}
export interface AccountGetPassword {
}
export interface AccountGetPasswordSettings {
    current_password_hash: bytes;
}
export interface AuthRequestPasswordRecovery {
}
export interface MessagesExportChatInvite {
    chat_id: number;
}
export interface ChannelsExportInvite {
    channel: InputChannel;
}
export interface MessagesCheckChatInvite {
    hash: string;
}
export interface MessagesGetStickerSet {
    stickerset: TMtpInputStickerSet;
}
export interface MessagesInstallStickerSet {
    stickerset: TMtpInputStickerSet;
    archived: TMtpBool;
}
export interface HelpGetAppChangelog {
}
export interface ChannelsGetParticipants {
    channel: InputChannel;
    filter: TMtpChannelParticipantsFilter;
    offset: number;
    limit: number;
}
export interface ChannelsGetParticipant {
    channel: InputChannel;
    user_id: InputUser;
}
export interface UpdatesGetChannelDifference {
    channel: InputChannel;
    filter: ChannelMessagesFilter;
    pts: number;
    limit: number;
}
export interface HelpGetTermsOfService {
}
export interface MessagesGetDocumentByHash {
    sha256: bytes;
    size: number;
    mime_type: string;
}
export interface MessagesSearchGifs {
    q: string;
    offset: number;
}
export interface MessagesGetSavedGifs {
    hash: number;
}
export interface MessagesGetInlineBotResults {
    flags?: number;
    bot: InputUser;
    peer: TMtpInputPeer;
    geo_point?: InputGeoPoint;
    query: string;
    offset: string;
}
export interface ChannelsExportMessageLink {
    channel: InputChannel;
    id: number;
}
export interface MessagesGetMessageEditData {
    peer: TMtpInputPeer;
    id: number;
}
export interface MessagesGetBotCallbackAnswer {
    flags?: number;
    game?: true;
    peer: TMtpInputPeer;
    msg_id: number;
    data?: bytes;
}
export interface ContactsGetTopPeers {
    flags?: number;
    correspondents?: true;
    bots_pm?: true;
    bots_inline?: true;
    groups?: true;
    channels?: true;
    offset: number;
    limit: number;
    hash: number;
}
export interface MessagesGetPeerDialogs {
    peers: IMtpVector<TMtpInputPeer>;
}
export interface MessagesGetFeaturedStickers {
    hash: number;
}
export interface MessagesGetRecentStickers {
    flags?: number;
    attached?: true;
    hash: number;
}
export interface MessagesGetArchivedStickers {
    flags?: number;
    masks?: true;
    offset_id: long;
    limit: number;
}
export interface MessagesGetAttachedStickers {
    media: TMtpInputStickeredMedia;
}
export interface MessagesGetGameHighScores {
    peer: TMtpInputPeer;
    id: number;
    user_id: InputUser;
}
export interface MessagesGetInlineGameHighScores {
    id: TMtpInputBotInlineMessageID;
    user_id: InputUser;
}
interface InvokeAfterMsg {
    (params: InvokeAfterMsg): any;
}
interface InvokeAfterMsgs {
    (params: InvokeAfterMsgs): any;
}
interface Auth {
    checkPhone(params: AuthCheckPhone): TMtpAuth$CheckedPhone;
    sendCode(params: AuthSendCode): TMtpAuth$SentCode;
    signUp(params: AuthSignUp): TMtpAuth$Authorization;
    signIn(params: AuthSignIn): TMtpAuth$Authorization;
    logOut(): TMtpBool;
    resetAuthorizations(): TMtpBool;
    sendInvites(params: AuthSendInvites): TMtpBool;
    exportAuthorization(params: AuthExportAuthorization): TMtpAuth$ExportedAuthorization;
    importAuthorization(params: AuthImportAuthorization): TMtpAuth$Authorization;
    bindTempAuthKey(params: AuthBindTempAuthKey): TMtpBool;
    importBotAuthorization(params: AuthImportBotAuthorization): TMtpAuth$Authorization;
    checkPassword(params: AuthCheckPassword): TMtpAuth$Authorization;
    requestPasswordRecovery(): TMtpAuth$PasswordRecovery;
    recoverPassword(params: AuthRecoverPassword): TMtpAuth$Authorization;
    resendCode(params: AuthResendCode): TMtpAuth$SentCode;
    cancelCode(params: AuthCancelCode): TMtpBool;
    dropTempAuthKeys(params: AuthDropTempAuthKeys): TMtpBool;
}
interface Account {
    registerDevice(params: AccountRegisterDevice): TMtpBool;
    unregisterDevice(params: AccountUnregisterDevice): TMtpBool;
    updateNotifySettings(params: AccountUpdateNotifySettings): TMtpBool;
    getNotifySettings(params: AccountGetNotifySettings): PeerNotifySettings;
    resetNotifySettings(): TMtpBool;
    updateProfile(params: AccountUpdateProfile): User;
    updateStatus(params: AccountUpdateStatus): TMtpBool;
    getWallPapers(): IMtpVector<WallPaper>;
    reportPeer(params: AccountReportPeer): TMtpBool;
    checkUsername(params: AccountCheckUsername): TMtpBool;
    updateUsername(params: AccountUpdateUsername): User;
    getPrivacy(params: AccountGetPrivacy): TMtpAccount$PrivacyRules;
    setPrivacy(params: AccountSetPrivacy): TMtpAccount$PrivacyRules;
    deleteAccount(params: AccountDeleteAccount): TMtpBool;
    getAccountTTL(): TMtpAccountDaysTTL;
    setAccountTTL(params: AccountSetAccountTtl): TMtpBool;
    sendChangePhoneCode(params: AccountSendChangePhoneCode): TMtpAuth$SentCode;
    changePhone(params: AccountChangePhone): User;
    updateDeviceLocked(params: AccountUpdateDeviceLocked): TMtpBool;
    getAuthorizations(): TMtpAccount$Authorizations;
    resetAuthorization(params: AccountResetAuthorization): TMtpBool;
    getPassword(): TMtpAccount$Password;
    getPasswordSettings(params: AccountGetPasswordSettings): TMtpAccount$PasswordSettings;
    updatePasswordSettings(params: AccountUpdatePasswordSettings): TMtpBool;
    sendConfirmPhoneCode(params: AccountSendConfirmPhoneCode): TMtpAuth$SentCode;
    confirmPhone(params: AccountConfirmPhone): TMtpBool;
}
interface Users {
    getUsers(params: UsersGetUsers): IMtpVector<User>;
    getFullUser(params: UsersGetFullUser): UserFull;
}
interface Contacts {
    getStatuses(): IMtpVector<ContactStatus>;
    getContacts(params: ContactsGetContacts): TMtpContacts$Contacts;
    importContacts(params: ContactsImportContacts): TMtpContacts$ImportedContacts;
    deleteContact(params: ContactsDeleteContact): TMtpContacts$Link;
    deleteContacts(params: ContactsDeleteContacts): TMtpBool;
    block(params: ContactsBlock): TMtpBool;
    unblock(params: ContactsUnblock): TMtpBool;
    getBlocked(params: ContactsGetBlocked): TMtpContacts$Blocked;
    exportCard(): IMtpVector<number>;
    importCard(params: ContactsImportCard): User;
    search(params: ContactsSearch): TMtpContacts$Found;
    resolveUsername(params: ContactsResolveUsername): TMtpContacts$ResolvedPeer;
    getTopPeers(params: ContactsGetTopPeers): TMtpContacts$TopPeers;
    resetTopPeerRating(params: ContactsResetTopPeerRating): TMtpBool;
}
interface Messages {
    getMessages(params: MessagesGetMessages): TMtpMessages$Messages;
    getDialogs(params: MessagesGetDialogs): TMtpMessages$Dialogs;
    getHistory(params: MessagesGetHistory): TMtpMessages$Messages;
    search(params: MessagesSearch): TMtpMessages$Messages;
    readHistory(params: MessagesReadHistory): TMtpMessages$AffectedMessages;
    deleteHistory(params: MessagesDeleteHistory): TMtpMessages$AffectedHistory;
    deleteMessages(params: MessagesDeleteMessages): TMtpMessages$AffectedMessages;
    receivedMessages(params: MessagesReceivedMessages): IMtpVector<ReceivedNotifyMessage>;
    setTyping(params: MessagesSetTyping): TMtpBool;
    sendMessage(params: MessagesSendMessage): Updates;
    sendMedia(params: MessagesSendMedia): Updates;
    forwardMessages(params: MessagesForwardMessages): Updates;
    reportSpam(params: MessagesReportSpam): TMtpBool;
    hideReportSpam(params: MessagesHideReportSpam): TMtpBool;
    getPeerSettings(params: MessagesGetPeerSettings): PeerSettings;
    getChats(params: MessagesGetChats): TMtpMessages$Chats;
    getFullChat(params: MessagesGetFullChat): TMtpMessages$ChatFull;
    editChatTitle(params: MessagesEditChatTitle): Updates;
    editChatPhoto(params: MessagesEditChatPhoto): Updates;
    addChatUser(params: MessagesAddChatUser): Updates;
    deleteChatUser(params: MessagesDeleteChatUser): Updates;
    createChat(params: MessagesCreateChat): Updates;
    forwardMessage(params: MessagesForwardMessage): Updates;
    getDhConfig(params: MessagesGetDhConfig): TMtpMessages$DhConfig;
    requestEncryption(params: MessagesRequestEncryption): EncryptedChat;
    acceptEncryption(params: MessagesAcceptEncryption): EncryptedChat;
    discardEncryption(params: MessagesDiscardEncryption): TMtpBool;
    setEncryptedTyping(params: MessagesSetEncryptedTyping): TMtpBool;
    readEncryptedHistory(params: MessagesReadEncryptedHistory): TMtpBool;
    sendEncrypted(params: MessagesSendEncrypted): TMtpMessages$SentEncryptedMessage;
    sendEncryptedFile(params: MessagesSendEncryptedFile): TMtpMessages$SentEncryptedMessage;
    sendEncryptedService(params: MessagesSendEncryptedService): TMtpMessages$SentEncryptedMessage;
    receivedQueue(params: MessagesReceivedQueue): IMtpVector<long>;
    readMessageContents(params: MessagesReadMessageContents): TMtpMessages$AffectedMessages;
    getAllStickers(params: MessagesGetAllStickers): TMtpMessages$AllStickers;
    getWebPagePreview(params: MessagesGetWebPagePreview): TMtpMessageMedia;
    exportChatInvite(params: MessagesExportChatInvite): TMtpExportedChatInvite;
    checkChatInvite(params: MessagesCheckChatInvite): ChatInvite;
    importChatInvite(params: MessagesImportChatInvite): Updates;
    getStickerSet(params: MessagesGetStickerSet): TMtpMessages$StickerSet;
    installStickerSet(params: MessagesInstallStickerSet): TMtpMessages$StickerSetInstallResult;
    uninstallStickerSet(params: MessagesUninstallStickerSet): TMtpBool;
    startBot(params: MessagesStartBot): Updates;
    getMessagesViews(params: MessagesGetMessagesViews): IMtpVector<number>;
    toggleChatAdmins(params: MessagesToggleChatAdmins): Updates;
    editChatAdmin(params: MessagesEditChatAdmin): TMtpBool;
    migrateChat(params: MessagesMigrateChat): Updates;
    searchGlobal(params: MessagesSearchGlobal): TMtpMessages$Messages;
    reorderStickerSets(params: MessagesReorderStickerSets): TMtpBool;
    getDocumentByHash(params: MessagesGetDocumentByHash): Document;
    searchGifs(params: MessagesSearchGifs): TMtpMessages$FoundGifs;
    getSavedGifs(params: MessagesGetSavedGifs): TMtpMessages$SavedGifs;
    saveGif(params: MessagesSaveGif): TMtpBool;
    getInlineBotResults(params: MessagesGetInlineBotResults): TMtpMessages$BotResults;
    setInlineBotResults(params: MessagesSetInlineBotResults): TMtpBool;
    sendInlineBotResult(params: MessagesSendInlineBotResult): Updates;
    getMessageEditData(params: MessagesGetMessageEditData): TMtpMessages$MessageEditData;
    editMessage(params: MessagesEditMessage): Updates;
    editInlineBotMessage(params: MessagesEditInlineBotMessage): TMtpBool;
    getBotCallbackAnswer(params: MessagesGetBotCallbackAnswer): TMtpMessages$BotCallbackAnswer;
    setBotCallbackAnswer(params: MessagesSetBotCallbackAnswer): TMtpBool;
    getPeerDialogs(params: MessagesGetPeerDialogs): TMtpMessages$PeerDialogs;
    saveDraft(params: MessagesSaveDraft): TMtpBool;
    getAllDrafts(): Updates;
    getFeaturedStickers(params: MessagesGetFeaturedStickers): TMtpMessages$FeaturedStickers;
    readFeaturedStickers(params: MessagesReadFeaturedStickers): TMtpBool;
    getRecentStickers(params: MessagesGetRecentStickers): TMtpMessages$RecentStickers;
    saveRecentSticker(params: MessagesSaveRecentSticker): TMtpBool;
    clearRecentStickers(params: MessagesClearRecentStickers): TMtpBool;
    getArchivedStickers(params: MessagesGetArchivedStickers): TMtpMessages$ArchivedStickers;
    getMaskStickers(params: MessagesGetMaskStickers): TMtpMessages$AllStickers;
    getAttachedStickers(params: MessagesGetAttachedStickers): IMtpVector<StickerSetCovered>;
    setGameScore(params: MessagesSetGameScore): Updates;
    setInlineGameScore(params: MessagesSetInlineGameScore): TMtpBool;
    getGameHighScores(params: MessagesGetGameHighScores): TMtpMessages$HighScores;
    getInlineGameHighScores(params: MessagesGetInlineGameHighScores): TMtpMessages$HighScores;
}
interface Updates {
    getState(): TMtpUpdates$State;
    getDifference(params: UpdatesGetDifference): TMtpUpdates$Difference;
    getChannelDifference(params: UpdatesGetChannelDifference): TMtpUpdates$ChannelDifference;
}
interface Photos {
    updateProfilePhoto(params: PhotosUpdateProfilePhoto): UserProfilePhoto;
    uploadProfilePhoto(params: PhotosUploadProfilePhoto): TMtpPhotos$Photo;
    deletePhotos(params: PhotosDeletePhotos): IMtpVector<long>;
    getUserPhotos(params: PhotosGetUserPhotos): TMtpPhotos$Photos;
}
interface Upload {
    saveFilePart(params: UploadSaveFilePart): TMtpBool;
    getFile(params: UploadGetFile): TMtpUpload$File;
    saveBigFilePart(params: UploadSaveBigFilePart): TMtpBool;
}
interface Help {
    getConfig(): Config;
    getNearestDc(): NearestDc;
    getAppUpdate(): TMtpHelp$AppUpdate;
    saveAppLog(params: HelpSaveAppLog): TMtpBool;
    getInviteText(): TMtpHelp$InviteText;
    getSupport(): TMtpHelp$Support;
    getAppChangelog(): TMtpHelp$AppChangelog;
    getTermsOfService(): TMtpHelp$TermsOfService;
}
interface InitConnection {
    (params: InitConnection): any;
}
interface InvokeWithLayer {
    (params: InvokeWithLayer): any;
}
interface InvokeWithoutUpdates {
    (params: InvokeWithoutUpdates): any;
}
interface Channels {
    readHistory(params: ChannelsReadHistory): TMtpBool;
    deleteMessages(params: ChannelsDeleteMessages): TMtpMessages$AffectedMessages;
    deleteUserHistory(params: ChannelsDeleteUserHistory): TMtpMessages$AffectedHistory;
    reportSpam(params: ChannelsReportSpam): TMtpBool;
    getMessages(params: ChannelsGetMessages): TMtpMessages$Messages;
    getParticipants(params: ChannelsGetParticipants): TMtpChannels$ChannelParticipants;
    getParticipant(params: ChannelsGetParticipant): TMtpChannels$ChannelParticipant;
    getChannels(params: ChannelsGetChannels): TMtpMessages$Chats;
    getFullChannel(params: ChannelsGetFullChannel): TMtpMessages$ChatFull;
    createChannel(params: ChannelsCreateChannel): Updates;
    editAbout(params: ChannelsEditAbout): TMtpBool;
    editAdmin(params: ChannelsEditAdmin): Updates;
    editTitle(params: ChannelsEditTitle): Updates;
    editPhoto(params: ChannelsEditPhoto): Updates;
    checkUsername(params: ChannelsCheckUsername): TMtpBool;
    updateUsername(params: ChannelsUpdateUsername): TMtpBool;
    joinChannel(params: ChannelsJoinChannel): Updates;
    leaveChannel(params: ChannelsLeaveChannel): Updates;
    inviteToChannel(params: ChannelsInviteToChannel): Updates;
    kickFromChannel(params: ChannelsKickFromChannel): Updates;
    exportInvite(params: ChannelsExportInvite): TMtpExportedChatInvite;
    deleteChannel(params: ChannelsDeleteChannel): Updates;
    toggleInvites(params: ChannelsToggleInvites): Updates;
    exportMessageLink(params: ChannelsExportMessageLink): ExportedMessageLink;
    toggleSignatures(params: ChannelsToggleSignatures): Updates;
    updatePinnedMessage(params: ChannelsUpdatePinnedMessage): Updates;
    getAdminedPublicChannels(): TMtpMessages$Chats;
}
export interface Invoke {
    invokeAfterMsg: InvokeAfterMsg;
    invokeAfterMsgs: InvokeAfterMsgs;
    auth: Auth;
    account: Account;
    users: Users;
    contacts: Contacts;
    messages: Messages;
    updates: Updates;
    photos: Photos;
    upload: Upload;
    help: Help;
    initConnection: InitConnection;
    invokeWithLayer: InvokeWithLayer;
    invokeWithoutUpdates: InvokeWithoutUpdates;
    channels: Channels;
}
export interface ParamsTypes {
    "invokeAfterMsg": InvokeAfterMsg;
    "invokeAfterMsgs": InvokeAfterMsgs;
    "initConnection": InitConnection;
    "invokeWithLayer": InvokeWithLayer;
    "invokeWithoutUpdates": InvokeWithoutUpdates;
    "auth.checkPhone": AuthCheckPhone;
    "auth.sendCode": AuthSendCode;
    "account.sendChangePhoneCode": AccountSendChangePhoneCode;
    "auth.resendCode": AuthResendCode;
    "account.sendConfirmPhoneCode": AccountSendConfirmPhoneCode;
    "auth.signUp": AuthSignUp;
    "auth.signIn": AuthSignIn;
    "auth.importAuthorization": AuthImportAuthorization;
    "auth.importBotAuthorization": AuthImportBotAuthorization;
    "auth.checkPassword": AuthCheckPassword;
    "auth.recoverPassword": AuthRecoverPassword;
    "auth.logOut": AuthLogOut;
    "auth.resetAuthorizations": AuthResetAuthorizations;
    "auth.sendInvites": AuthSendInvites;
    "auth.bindTempAuthKey": AuthBindTempAuthKey;
    "account.registerDevice": AccountRegisterDevice;
    "account.unregisterDevice": AccountUnregisterDevice;
    "account.updateNotifySettings": AccountUpdateNotifySettings;
    "account.resetNotifySettings": AccountResetNotifySettings;
    "account.updateStatus": AccountUpdateStatus;
    "account.reportPeer": AccountReportPeer;
    "contacts.deleteContacts": ContactsDeleteContacts;
    "contacts.block": ContactsBlock;
    "contacts.unblock": ContactsUnblock;
    "messages.setTyping": MessagesSetTyping;
    "messages.reportSpam": MessagesReportSpam;
    "messages.hideReportSpam": MessagesHideReportSpam;
    "upload.saveFilePart": UploadSaveFilePart;
    "help.saveAppLog": HelpSaveAppLog;
    "messages.discardEncryption": MessagesDiscardEncryption;
    "messages.setEncryptedTyping": MessagesSetEncryptedTyping;
    "messages.readEncryptedHistory": MessagesReadEncryptedHistory;
    "upload.saveBigFilePart": UploadSaveBigFilePart;
    "account.checkUsername": AccountCheckUsername;
    "account.deleteAccount": AccountDeleteAccount;
    "account.setAccountTTL": AccountSetAccountTtl;
    "account.updateDeviceLocked": AccountUpdateDeviceLocked;
    "account.resetAuthorization": AccountResetAuthorization;
    "account.updatePasswordSettings": AccountUpdatePasswordSettings;
    "messages.uninstallStickerSet": MessagesUninstallStickerSet;
    "channels.readHistory": ChannelsReadHistory;
    "channels.reportSpam": ChannelsReportSpam;
    "channels.editAbout": ChannelsEditAbout;
    "channels.checkUsername": ChannelsCheckUsername;
    "channels.updateUsername": ChannelsUpdateUsername;
    "messages.editChatAdmin": MessagesEditChatAdmin;
    "messages.reorderStickerSets": MessagesReorderStickerSets;
    "messages.saveGif": MessagesSaveGif;
    "messages.setInlineBotResults": MessagesSetInlineBotResults;
    "auth.cancelCode": AuthCancelCode;
    "messages.editInlineBotMessage": MessagesEditInlineBotMessage;
    "messages.setBotCallbackAnswer": MessagesSetBotCallbackAnswer;
    "contacts.resetTopPeerRating": ContactsResetTopPeerRating;
    "messages.saveDraft": MessagesSaveDraft;
    "messages.readFeaturedStickers": MessagesReadFeaturedStickers;
    "messages.saveRecentSticker": MessagesSaveRecentSticker;
    "messages.clearRecentStickers": MessagesClearRecentStickers;
    "account.confirmPhone": AccountConfirmPhone;
    "auth.dropTempAuthKeys": AuthDropTempAuthKeys;
    "messages.setInlineGameScore": MessagesSetInlineGameScore;
    "auth.exportAuthorization": AuthExportAuthorization;
    "account.getNotifySettings": AccountGetNotifySettings;
    "account.updateProfile": AccountUpdateProfile;
    "contacts.importCard": ContactsImportCard;
    "account.updateUsername": AccountUpdateUsername;
    "account.changePhone": AccountChangePhone;
    "account.getWallPapers": AccountGetWallPapers;
    "users.getUsers": UsersGetUsers;
    "users.getFullUser": UsersGetFullUser;
    "contacts.getStatuses": ContactsGetStatuses;
    "contacts.getContacts": ContactsGetContacts;
    "contacts.importContacts": ContactsImportContacts;
    "contacts.deleteContact": ContactsDeleteContact;
    "contacts.getBlocked": ContactsGetBlocked;
    "contacts.exportCard": ContactsExportCard;
    "messages.getMessagesViews": MessagesGetMessagesViews;
    "messages.getMessages": MessagesGetMessages;
    "messages.getHistory": MessagesGetHistory;
    "messages.search": MessagesSearch;
    "channels.getMessages": ChannelsGetMessages;
    "messages.searchGlobal": MessagesSearchGlobal;
    "messages.getDialogs": MessagesGetDialogs;
    "messages.readHistory": MessagesReadHistory;
    "messages.deleteMessages": MessagesDeleteMessages;
    "messages.readMessageContents": MessagesReadMessageContents;
    "channels.deleteMessages": ChannelsDeleteMessages;
    "messages.deleteHistory": MessagesDeleteHistory;
    "channels.deleteUserHistory": ChannelsDeleteUserHistory;
    "messages.receivedMessages": MessagesReceivedMessages;
    "messages.sendMessage": MessagesSendMessage;
    "messages.sendMedia": MessagesSendMedia;
    "messages.forwardMessages": MessagesForwardMessages;
    "messages.editChatTitle": MessagesEditChatTitle;
    "messages.editChatPhoto": MessagesEditChatPhoto;
    "messages.addChatUser": MessagesAddChatUser;
    "messages.deleteChatUser": MessagesDeleteChatUser;
    "messages.createChat": MessagesCreateChat;
    "messages.forwardMessage": MessagesForwardMessage;
    "messages.importChatInvite": MessagesImportChatInvite;
    "messages.startBot": MessagesStartBot;
    "channels.createChannel": ChannelsCreateChannel;
    "channels.editAdmin": ChannelsEditAdmin;
    "channels.editTitle": ChannelsEditTitle;
    "channels.editPhoto": ChannelsEditPhoto;
    "channels.joinChannel": ChannelsJoinChannel;
    "channels.leaveChannel": ChannelsLeaveChannel;
    "channels.inviteToChannel": ChannelsInviteToChannel;
    "channels.kickFromChannel": ChannelsKickFromChannel;
    "channels.deleteChannel": ChannelsDeleteChannel;
    "messages.toggleChatAdmins": MessagesToggleChatAdmins;
    "messages.migrateChat": MessagesMigrateChat;
    "messages.sendInlineBotResult": MessagesSendInlineBotResult;
    "channels.toggleInvites": ChannelsToggleInvites;
    "channels.toggleSignatures": ChannelsToggleSignatures;
    "channels.updatePinnedMessage": ChannelsUpdatePinnedMessage;
    "messages.editMessage": MessagesEditMessage;
    "messages.getAllDrafts": MessagesGetAllDrafts;
    "messages.setGameScore": MessagesSetGameScore;
    "messages.getPeerSettings": MessagesGetPeerSettings;
    "messages.getChats": MessagesGetChats;
    "channels.getChannels": ChannelsGetChannels;
    "channels.getAdminedPublicChannels": ChannelsGetAdminedPublicChannels;
    "messages.getFullChat": MessagesGetFullChat;
    "channels.getFullChannel": ChannelsGetFullChannel;
    "updates.getState": UpdatesGetState;
    "updates.getDifference": UpdatesGetDifference;
    "photos.updateProfilePhoto": PhotosUpdateProfilePhoto;
    "photos.uploadProfilePhoto": PhotosUploadProfilePhoto;
    "photos.deletePhotos": PhotosDeletePhotos;
    "messages.receivedQueue": MessagesReceivedQueue;
    "upload.getFile": UploadGetFile;
    "help.getConfig": HelpGetConfig;
    "help.getNearestDc": HelpGetNearestDc;
    "help.getAppUpdate": HelpGetAppUpdate;
    "help.getInviteText": HelpGetInviteText;
    "photos.getUserPhotos": PhotosGetUserPhotos;
    "messages.getDhConfig": MessagesGetDhConfig;
    "messages.requestEncryption": MessagesRequestEncryption;
    "messages.acceptEncryption": MessagesAcceptEncryption;
    "messages.sendEncrypted": MessagesSendEncrypted;
    "messages.sendEncryptedFile": MessagesSendEncryptedFile;
    "messages.sendEncryptedService": MessagesSendEncryptedService;
    "help.getSupport": HelpGetSupport;
    "contacts.search": ContactsSearch;
    "account.getPrivacy": AccountGetPrivacy;
    "account.setPrivacy": AccountSetPrivacy;
    "account.getAccountTTL": AccountGetAccountTtl;
    "contacts.resolveUsername": ContactsResolveUsername;
    "messages.getAllStickers": MessagesGetAllStickers;
    "messages.getMaskStickers": MessagesGetMaskStickers;
    "messages.getWebPagePreview": MessagesGetWebPagePreview;
    "account.getAuthorizations": AccountGetAuthorizations;
    "account.getPassword": AccountGetPassword;
    "account.getPasswordSettings": AccountGetPasswordSettings;
    "auth.requestPasswordRecovery": AuthRequestPasswordRecovery;
    "messages.exportChatInvite": MessagesExportChatInvite;
    "channels.exportInvite": ChannelsExportInvite;
    "messages.checkChatInvite": MessagesCheckChatInvite;
    "messages.getStickerSet": MessagesGetStickerSet;
    "messages.installStickerSet": MessagesInstallStickerSet;
    "help.getAppChangelog": HelpGetAppChangelog;
    "channels.getParticipants": ChannelsGetParticipants;
    "channels.getParticipant": ChannelsGetParticipant;
    "updates.getChannelDifference": UpdatesGetChannelDifference;
    "help.getTermsOfService": HelpGetTermsOfService;
    "messages.getDocumentByHash": MessagesGetDocumentByHash;
    "messages.searchGifs": MessagesSearchGifs;
    "messages.getSavedGifs": MessagesGetSavedGifs;
    "messages.getInlineBotResults": MessagesGetInlineBotResults;
    "channels.exportMessageLink": ChannelsExportMessageLink;
    "messages.getMessageEditData": MessagesGetMessageEditData;
    "messages.getBotCallbackAnswer": MessagesGetBotCallbackAnswer;
    "contacts.getTopPeers": ContactsGetTopPeers;
    "messages.getPeerDialogs": MessagesGetPeerDialogs;
    "messages.getFeaturedStickers": MessagesGetFeaturedStickers;
    "messages.getRecentStickers": MessagesGetRecentStickers;
    "messages.getArchivedStickers": MessagesGetArchivedStickers;
    "messages.getAttachedStickers": MessagesGetAttachedStickers;
    "messages.getGameHighScores": MessagesGetGameHighScores;
    "messages.getInlineGameHighScores": MessagesGetInlineGameHighScores;
}
export interface ReturnTypes {
    "invokeAfterMsg": any;
    "invokeAfterMsgs": any;
    "initConnection": any;
    "invokeWithLayer": any;
    "invokeWithoutUpdates": any;
    "auth.checkPhone": TMtpAuth$CheckedPhone;
    "auth.sendCode": TMtpAuth$SentCode;
    "account.sendChangePhoneCode": TMtpAuth$SentCode;
    "auth.resendCode": TMtpAuth$SentCode;
    "account.sendConfirmPhoneCode": TMtpAuth$SentCode;
    "auth.signUp": TMtpAuth$Authorization;
    "auth.signIn": TMtpAuth$Authorization;
    "auth.importAuthorization": TMtpAuth$Authorization;
    "auth.importBotAuthorization": TMtpAuth$Authorization;
    "auth.checkPassword": TMtpAuth$Authorization;
    "auth.recoverPassword": TMtpAuth$Authorization;
    "auth.logOut": TMtpBool;
    "auth.resetAuthorizations": TMtpBool;
    "auth.sendInvites": TMtpBool;
    "auth.bindTempAuthKey": TMtpBool;
    "account.registerDevice": TMtpBool;
    "account.unregisterDevice": TMtpBool;
    "account.updateNotifySettings": TMtpBool;
    "account.resetNotifySettings": TMtpBool;
    "account.updateStatus": TMtpBool;
    "account.reportPeer": TMtpBool;
    "contacts.deleteContacts": TMtpBool;
    "contacts.block": TMtpBool;
    "contacts.unblock": TMtpBool;
    "messages.setTyping": TMtpBool;
    "messages.reportSpam": TMtpBool;
    "messages.hideReportSpam": TMtpBool;
    "upload.saveFilePart": TMtpBool;
    "help.saveAppLog": TMtpBool;
    "messages.discardEncryption": TMtpBool;
    "messages.setEncryptedTyping": TMtpBool;
    "messages.readEncryptedHistory": TMtpBool;
    "upload.saveBigFilePart": TMtpBool;
    "account.checkUsername": TMtpBool;
    "account.deleteAccount": TMtpBool;
    "account.setAccountTTL": TMtpBool;
    "account.updateDeviceLocked": TMtpBool;
    "account.resetAuthorization": TMtpBool;
    "account.updatePasswordSettings": TMtpBool;
    "messages.uninstallStickerSet": TMtpBool;
    "channels.readHistory": TMtpBool;
    "channels.reportSpam": TMtpBool;
    "channels.editAbout": TMtpBool;
    "channels.checkUsername": TMtpBool;
    "channels.updateUsername": TMtpBool;
    "messages.editChatAdmin": TMtpBool;
    "messages.reorderStickerSets": TMtpBool;
    "messages.saveGif": TMtpBool;
    "messages.setInlineBotResults": TMtpBool;
    "auth.cancelCode": TMtpBool;
    "messages.editInlineBotMessage": TMtpBool;
    "messages.setBotCallbackAnswer": TMtpBool;
    "contacts.resetTopPeerRating": TMtpBool;
    "messages.saveDraft": TMtpBool;
    "messages.readFeaturedStickers": TMtpBool;
    "messages.saveRecentSticker": TMtpBool;
    "messages.clearRecentStickers": TMtpBool;
    "account.confirmPhone": TMtpBool;
    "auth.dropTempAuthKeys": TMtpBool;
    "messages.setInlineGameScore": TMtpBool;
    "auth.exportAuthorization": TMtpAuth$ExportedAuthorization;
    "account.getNotifySettings": PeerNotifySettings;
    "account.updateProfile": User;
    "contacts.importCard": User;
    "account.updateUsername": User;
    "account.changePhone": User;
    "account.getWallPapers": IMtpVector<WallPaper>;
    "users.getUsers": IMtpVector<User>;
    "users.getFullUser": UserFull;
    "contacts.getStatuses": IMtpVector<ContactStatus>;
    "contacts.getContacts": TMtpContacts$Contacts;
    "contacts.importContacts": TMtpContacts$ImportedContacts;
    "contacts.deleteContact": TMtpContacts$Link;
    "contacts.getBlocked": TMtpContacts$Blocked;
    "contacts.exportCard": IMtpVector<number>;
    "messages.getMessagesViews": IMtpVector<number>;
    "messages.getMessages": TMtpMessages$Messages;
    "messages.getHistory": TMtpMessages$Messages;
    "messages.search": TMtpMessages$Messages;
    "channels.getMessages": TMtpMessages$Messages;
    "messages.searchGlobal": TMtpMessages$Messages;
    "messages.getDialogs": TMtpMessages$Dialogs;
    "messages.readHistory": TMtpMessages$AffectedMessages;
    "messages.deleteMessages": TMtpMessages$AffectedMessages;
    "messages.readMessageContents": TMtpMessages$AffectedMessages;
    "channels.deleteMessages": TMtpMessages$AffectedMessages;
    "messages.deleteHistory": TMtpMessages$AffectedHistory;
    "channels.deleteUserHistory": TMtpMessages$AffectedHistory;
    "messages.receivedMessages": IMtpVector<ReceivedNotifyMessage>;
    "messages.sendMessage": Updates;
    "messages.sendMedia": Updates;
    "messages.forwardMessages": Updates;
    "messages.editChatTitle": Updates;
    "messages.editChatPhoto": Updates;
    "messages.addChatUser": Updates;
    "messages.deleteChatUser": Updates;
    "messages.createChat": Updates;
    "messages.forwardMessage": Updates;
    "messages.importChatInvite": Updates;
    "messages.startBot": Updates;
    "channels.createChannel": Updates;
    "channels.editAdmin": Updates;
    "channels.editTitle": Updates;
    "channels.editPhoto": Updates;
    "channels.joinChannel": Updates;
    "channels.leaveChannel": Updates;
    "channels.inviteToChannel": Updates;
    "channels.kickFromChannel": Updates;
    "channels.deleteChannel": Updates;
    "messages.toggleChatAdmins": Updates;
    "messages.migrateChat": Updates;
    "messages.sendInlineBotResult": Updates;
    "channels.toggleInvites": Updates;
    "channels.toggleSignatures": Updates;
    "channels.updatePinnedMessage": Updates;
    "messages.editMessage": Updates;
    "messages.getAllDrafts": Updates;
    "messages.setGameScore": Updates;
    "messages.getPeerSettings": PeerSettings;
    "messages.getChats": TMtpMessages$Chats;
    "channels.getChannels": TMtpMessages$Chats;
    "channels.getAdminedPublicChannels": TMtpMessages$Chats;
    "messages.getFullChat": TMtpMessages$ChatFull;
    "channels.getFullChannel": TMtpMessages$ChatFull;
    "updates.getState": TMtpUpdates$State;
    "updates.getDifference": TMtpUpdates$Difference;
    "photos.updateProfilePhoto": UserProfilePhoto;
    "photos.uploadProfilePhoto": TMtpPhotos$Photo;
    "photos.deletePhotos": IMtpVector<long>;
    "messages.receivedQueue": IMtpVector<long>;
    "upload.getFile": TMtpUpload$File;
    "help.getConfig": Config;
    "help.getNearestDc": NearestDc;
    "help.getAppUpdate": TMtpHelp$AppUpdate;
    "help.getInviteText": TMtpHelp$InviteText;
    "photos.getUserPhotos": TMtpPhotos$Photos;
    "messages.getDhConfig": TMtpMessages$DhConfig;
    "messages.requestEncryption": EncryptedChat;
    "messages.acceptEncryption": EncryptedChat;
    "messages.sendEncrypted": TMtpMessages$SentEncryptedMessage;
    "messages.sendEncryptedFile": TMtpMessages$SentEncryptedMessage;
    "messages.sendEncryptedService": TMtpMessages$SentEncryptedMessage;
    "help.getSupport": TMtpHelp$Support;
    "contacts.search": TMtpContacts$Found;
    "account.getPrivacy": TMtpAccount$PrivacyRules;
    "account.setPrivacy": TMtpAccount$PrivacyRules;
    "account.getAccountTTL": TMtpAccountDaysTTL;
    "contacts.resolveUsername": TMtpContacts$ResolvedPeer;
    "messages.getAllStickers": TMtpMessages$AllStickers;
    "messages.getMaskStickers": TMtpMessages$AllStickers;
    "messages.getWebPagePreview": TMtpMessageMedia;
    "account.getAuthorizations": TMtpAccount$Authorizations;
    "account.getPassword": TMtpAccount$Password;
    "account.getPasswordSettings": TMtpAccount$PasswordSettings;
    "auth.requestPasswordRecovery": TMtpAuth$PasswordRecovery;
    "messages.exportChatInvite": TMtpExportedChatInvite;
    "channels.exportInvite": TMtpExportedChatInvite;
    "messages.checkChatInvite": ChatInvite;
    "messages.getStickerSet": TMtpMessages$StickerSet;
    "messages.installStickerSet": TMtpMessages$StickerSetInstallResult;
    "help.getAppChangelog": TMtpHelp$AppChangelog;
    "channels.getParticipants": TMtpChannels$ChannelParticipants;
    "channels.getParticipant": TMtpChannels$ChannelParticipant;
    "updates.getChannelDifference": TMtpUpdates$ChannelDifference;
    "help.getTermsOfService": TMtpHelp$TermsOfService;
    "messages.getDocumentByHash": Document;
    "messages.searchGifs": TMtpMessages$FoundGifs;
    "messages.getSavedGifs": TMtpMessages$SavedGifs;
    "messages.getInlineBotResults": TMtpMessages$BotResults;
    "channels.exportMessageLink": ExportedMessageLink;
    "messages.getMessageEditData": TMtpMessages$MessageEditData;
    "messages.getBotCallbackAnswer": TMtpMessages$BotCallbackAnswer;
    "contacts.getTopPeers": TMtpContacts$TopPeers;
    "messages.getPeerDialogs": TMtpMessages$PeerDialogs;
    "messages.getFeaturedStickers": TMtpMessages$FeaturedStickers;
    "messages.getRecentStickers": TMtpMessages$RecentStickers;
    "messages.getArchivedStickers": TMtpMessages$ArchivedStickers;
    "messages.getAttachedStickers": IMtpVector<StickerSetCovered>;
    "messages.getGameHighScores": TMtpMessages$HighScores;
    "messages.getInlineGameHighScores": TMtpMessages$HighScores;
}

