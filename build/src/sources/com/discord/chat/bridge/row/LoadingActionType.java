package com.discord.chat.bridge.row;

import ft.m;
import java.lang.annotation.Annotation;
import jt.e0;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
import qr.l;
import qr.o;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@m
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0081\u0002\u0018\u0000 \u00062\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0006B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/LoadingActionType;", "", "<init>", "(Ljava/lang/String;I)V", "LOAD_MORE_BEFORE", "LOAD_MORE_AFTER", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LoadingActionType {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ LoadingActionType[] $VALUES;
    @NotNull
    private static final Lazy $cachedSerializer$delegate;
    @NotNull
    public static final Companion Companion;
    public static final LoadingActionType LOAD_MORE_BEFORE = new LoadingActionType("LOAD_MORE_BEFORE", 0);
    public static final LoadingActionType LOAD_MORE_AFTER = new LoadingActionType("LOAD_MORE_AFTER", 1);

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/LoadingActionType$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/row/LoadingActionType;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        private final /* synthetic */ KSerializer get$cachedSerializer() {
            return (KSerializer) LoadingActionType.$cachedSerializer$delegate.getValue();
        }

        @NotNull
        public final KSerializer serializer() {
            return get$cachedSerializer();
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    private static final /* synthetic */ LoadingActionType[] $values() {
        return new LoadingActionType[]{LOAD_MORE_BEFORE, LOAD_MORE_AFTER};
    }

    static {
        LoadingActionType[] $values = $values();
        $VALUES = $values;
        $ENTRIES = xr.a.a($values);
        Companion = new Companion(null);
        $cachedSerializer$delegate = l.b(o.f48092e, new Function0() { // from class: com.discord.chat.bridge.row.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _init_$_anonymous_;
                _init_$_anonymous_ = LoadingActionType._init_$_anonymous_();
                return _init_$_anonymous_;
            }
        });
    }

    private LoadingActionType(String str, int i10) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _init_$_anonymous_() {
        return e0.a("com.discord.chat.bridge.row.LoadingActionType", values(), new String[]{"load_more_before", "load_more_after"}, new Annotation[][]{null, null}, null);
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static LoadingActionType valueOf(String str) {
        return (LoadingActionType) Enum.valueOf(LoadingActionType.class, str);
    }

    public static LoadingActionType[] values() {
        return (LoadingActionType[]) $VALUES.clone();
    }
}
