export default {
  SET_PLAYER_STATE: (state, playerState) => {
    state.playerState = playerState;
  },

  SET_SESSION: (state, session) => {
    state.session = session;
  },

  SET_OFFSET_MS: (state, offset) => {
    state.offsetMs = offset;
  },

  SET_MEDIA_INDEX: (state, index) => {
    state.mediaIndex = index;
  },

  SET_PLEX_DECISION: (state, decision) => {
    state.plexDecision = decision;
  },

  // DOM attributes aren't reactive so you have to update this periodically
  UPDATE_PLAYER_CONTROLS_SHOWN: (state, shown) => {
    state.playerControlsShown = shown;
  },

  SET_PLAYER_CONTROLS_SHOWN_INTERVAL: (state, interval) => {
    state.playerControlsShownInterval = interval;
  },

  STOP_UPDATE_PLAYER_CONTROLS_SHOWN_INTERVAL: (state) => {
    clearInterval(state.playerControlsShownInterval);
    state.playerControlsShownInterval = null;
  },

  SET_BUFFERING_EVENT_LISTENER: (state, listener) => {
    state.bufferingEventListener = listener;
  },

  SET_CLICK_EVENT_LISTENER: (state, listener) => {
    state.clickEventListener = listener;
  },

  SET_PLEX_TIMELINE_UPDATER_CANCEL_TOKEN: (state, token) => {
    state.plexTimelineUpdaterCancelToken = token;
  },

  SET_IS_PLAYER_INITIALIZED: (state, isInitialized) => {
    state.isPlayerInitialized = isInitialized;
  },

  SET_PLAYER_INITIALIZED_DEFERRED_PROMISE: (state, deferred) => {
    state.playerInitializedDeferredPromise = deferred;
  },

  SET_MASK_PLAYER_STATE: (state, mask) => {
    state.maskPlayerState = mask;
  },

  SET_IS_IN_PICTURE_IN_PICTURE: (state, isIn) => {
    state.isInPictureInPicture = isIn;
  },
};
