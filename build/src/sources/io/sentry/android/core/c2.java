package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum c2 {
    SENTRY_HANDLER_STRATEGY_DEFAULT(0),
    SENTRY_HANDLER_STRATEGY_CHAIN_AT_START(1);
    
    private final int value;

    c2(int i10) {
        this.value = i10;
    }

    public int getValue() {
        return this.value;
    }
}
