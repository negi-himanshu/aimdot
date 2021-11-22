export const GameStatus = {
    READY: "READY",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED"
}

export const GameActions = {
    INIT: "INIT",
    START: "START",
    ON_DOT_CLICK: "ON_DOT_CLICK",
}

export const InitialGameState = {
    status: GameStatus.READY
};

const MAX_STAGE = 10

export default function GameReducer(state, action) {
  switch (action.type) {
    case GameActions.INIT:
      return {
          status: GameStatus.READY
      };
    case GameActions.START:
      return {
        status: GameStatus.IN_PROGRESS,
        stageCount: 1,
        gameStartTime: Date.now()
    };
    case GameActions.ON_DOT_CLICK:
        const { stageCount = 0, gameStartTime } = state || {}
        if (stageCount >= MAX_STAGE) {
            const timeTaken = Date.now() - gameStartTime
            return {
                status: GameStatus.COMPLETED,
                timeTaken
            };
        }
      return {
        ...state,
        status: GameStatus.IN_PROGRESS,
        stageCount: stageCount + 1
    };
    default:
      throw new Error();
  }
}
