package com.discord.chat.presentation.root;

import at.e0;
import ir.l;
import ir.o;
import java.lang.annotation.Annotation;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
import xs.m;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/root/MessageContextType;", "", "<init>", "(Ljava/lang/String;I)V", "DEFAULT", "SEARCH", "MEDIA_VIEWER", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageContextType {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ MessageContextType[] $VALUES;
    @NotNull
    private static final Lazy $cachedSerializer$delegate;
    @NotNull
    public static final Companion Companion;
    public static final MessageContextType DEFAULT = new MessageContextType("DEFAULT", 0);
    public static final MessageContextType SEARCH = new MessageContextType("SEARCH", 1);
    public static final MessageContextType MEDIA_VIEWER = new MessageContextType("MEDIA_VIEWER", 2);

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/root/MessageContextType$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/presentation/root/MessageContextType;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        private final /* synthetic */ KSerializer get$cachedSerializer() {
            return (KSerializer) MessageContextType.$cachedSerializer$delegate.getValue();
        }

        @NotNull
        public final KSerializer serializer() {
            return get$cachedSerializer();
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    private static final /* synthetic */ MessageContextType[] $values() {
        return new MessageContextType[]{DEFAULT, SEARCH, MEDIA_VIEWER};
    }

    static {
        MessageContextType[] $values = $values();
        $VALUES = $values;
        $ENTRIES = pr.a.a($values);
        Companion = new Companion(null);
        $cachedSerializer$delegate = l.a(o.f31103e, new Function0() { // from class: com.discord.chat.presentation.root.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _init_$_anonymous_;
                _init_$_anonymous_ = MessageContextType._init_$_anonymous_();
                return _init_$_anonymous_;
            }
        });
    }

    private MessageContextType(String str, int i10) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _init_$_anonymous_() {
        return e0.a("com.discord.chat.presentation.root.MessageContextType", values(), new String[]{"0", "1", "2"}, new Annotation[][]{null, null, null}, null);
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static MessageContextType valueOf(String str) {
        return (MessageContextType) Enum.valueOf(MessageContextType.class, str);
    }

    public static MessageContextType[] values() {
        return (MessageContextType[]) $VALUES.clone();
    }
}
