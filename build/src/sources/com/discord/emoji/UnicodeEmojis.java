package com.discord.emoji;

import android.content.Context;
import at.n2;
import at.v1;
import com.discord.emoji.UnicodeEmojis;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import gs.m0;
import ir.o;
import ir.v;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.sync.Mutex;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001:\u0002\u0013\u0014B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J(\u0010\r\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u000b0\t2\u0006\u0010\u000e\u001a\u00020\u000fH\u0086@¢\u0006\u0002\u0010\u0010J\u0016\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u000e\u001a\u00020\u000fH\u0082@¢\u0006\u0002\u0010\u0010R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R \u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u000b0\tX\u0082.¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/discord/emoji/UnicodeEmojis;", "", "<init>", "()V", "emojiJsonParser", "Lkotlinx/serialization/json/Json;", "emojiLoadingMutex", "Lkotlinx/coroutines/sync/Mutex;", "emojis", "", "", "", "Lcom/discord/emoji/UnicodeEmojis$Emoji;", "load", "context", "Landroid/content/Context;", "(Landroid/content/Context;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "loadData", "Lcom/discord/emoji/UnicodeEmojis$EmojiCategories;", "EmojiCategories", "Emoji", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nUnicodeEmojis.kt\nKotlin\n*S Kotlin\n*F\n+ 1 UnicodeEmojis.kt\ncom/discord/emoji/UnicodeEmojis\n+ 2 Mutex.kt\nkotlinx/coroutines/sync/MutexKt\n*L\n1#1,68:1\n116#2,10:69\n*S KotlinDebug\n*F\n+ 1 UnicodeEmojis.kt\ncom/discord/emoji/UnicodeEmojis\n*L\n22#1:69,10\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class UnicodeEmojis {
    @NotNull
    public static final UnicodeEmojis INSTANCE = new UnicodeEmojis();
    @NotNull
    private static final Json emojiJsonParser = kotlinx.serialization.json.b.b(null, new Function1() { // from class: com.discord.emoji.d
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit emojiJsonParser$lambda$0;
            emojiJsonParser$lambda$0 = UnicodeEmojis.emojiJsonParser$lambda$0((JsonBuilder) obj);
            return emojiJsonParser$lambda$0;
        }
    }, 1, null);
    @NotNull
    private static final Mutex emojiLoadingMutex = ps.f.b(false, 1, null);
    private static Map<String, ? extends List<Emoji>> emojis;

    @Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u001d\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007B5\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\u000f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0004HÆ\u0003J#\u0010\u0013\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0004HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0017\u001a\u00020\tHÖ\u0001J\t\u0010\u0018\u001a\u00020\u0004HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0005\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006#"}, d2 = {"Lcom/discord/emoji/UnicodeEmojis$Emoji;", "", "names", "", "", "surrogates", "<init>", "(Ljava/util/List;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getNames", "()Ljava/util/List;", "getSurrogates", "()Ljava/lang/String;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$emoji_release", "$serializer", "Companion", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @xs.m
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Emoji {
        @NotNull
        private final List<String> names;
        @NotNull
        private final String surrogates;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private static final Lazy[] $childSerializers = {ir.l.a(o.f31119e, new Function0() { // from class: com.discord.emoji.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = UnicodeEmojis.Emoji._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), null};

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/emoji/UnicodeEmojis$Emoji$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/emoji/UnicodeEmojis$Emoji;", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return UnicodeEmojis$Emoji$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ Emoji(int i10, List list, String str, SerializationConstructorMarker serializationConstructorMarker) {
            if (3 != (i10 & 3)) {
                v1.b(i10, 3, UnicodeEmojis$Emoji$$serializer.INSTANCE.getDescriptor());
            }
            this.names = list;
            this.surrogates = str;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
            return new at.f(n2.f6848a);
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ Emoji copy$default(Emoji emoji, List list, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = emoji.names;
            }
            if ((i10 & 2) != 0) {
                str = emoji.surrogates;
            }
            return emoji.copy(list, str);
        }

        public static final /* synthetic */ void write$Self$emoji_release(Emoji emoji, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            compositeEncoder.j(serialDescriptor, 0, (xs.o) $childSerializers[0].getValue(), emoji.names);
            compositeEncoder.y(serialDescriptor, 1, emoji.surrogates);
        }

        @NotNull
        public final List<String> component1() {
            return this.names;
        }

        @NotNull
        public final String component2() {
            return this.surrogates;
        }

        @NotNull
        public final Emoji copy(@NotNull List<String> names, @NotNull String surrogates) {
            Intrinsics.checkNotNullParameter(names, "names");
            Intrinsics.checkNotNullParameter(surrogates, "surrogates");
            return new Emoji(names, surrogates);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Emoji) {
                Emoji emoji = (Emoji) obj;
                return Intrinsics.areEqual(this.names, emoji.names) && Intrinsics.areEqual(this.surrogates, emoji.surrogates);
            }
            return false;
        }

        @NotNull
        public final List<String> getNames() {
            return this.names;
        }

        @NotNull
        public final String getSurrogates() {
            return this.surrogates;
        }

        public int hashCode() {
            return (this.names.hashCode() * 31) + this.surrogates.hashCode();
        }

        @NotNull
        public String toString() {
            List<String> list = this.names;
            String str = this.surrogates;
            return "Emoji(names=" + list + ", surrogates=" + str + ")";
        }

        public Emoji(@NotNull List<String> names, @NotNull String surrogates) {
            Intrinsics.checkNotNullParameter(names, "names");
            Intrinsics.checkNotNullParameter(surrogates, "surrogates");
            this.names = names;
            this.surrogates = surrogates;
        }
    }

    @Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 62\u00020\u0001:\u000256Bw\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\u0004\b\f\u0010\rB\u009b\u0001\b\u0010\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\b\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\t\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\n\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u000b\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\f\u0010\u0012J\u0018\u0010\u001c\u001a\u0014\u0012\u0004\u0012\u00020\u001e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00040\u00030\u001dJ\u000f\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010 \u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010!\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010\"\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010#\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010$\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010%\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000f\u0010&\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u0089\u0001\u0010'\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u000e\b\u0002\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0001J\u0013\u0010(\u001a\u00020)2\b\u0010*\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010+\u001a\u00020\u000fHÖ\u0001J\t\u0010,\u001a\u00020\u001eHÖ\u0001J%\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u00020\u00002\u0006\u00100\u001a\u0002012\u0006\u00102\u001a\u000203H\u0001¢\u0006\u0002\b4R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0017\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0014R\u0017\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0014R\u0017\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0014R\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0014R\u0017\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0014R\u0017\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0014R\u0017\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0014¨\u00067"}, d2 = {"Lcom/discord/emoji/UnicodeEmojis$EmojiCategories;", "", "people", "", "Lcom/discord/emoji/UnicodeEmojis$Emoji;", "nature", "food", "activity", "travel", "objects", "symbols", "flags", "<init>", "(Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getPeople", "()Ljava/util/List;", "getNature", "getFood", "getActivity", "getTravel", "getObjects", "getSymbols", "getFlags", "toMap", "", "", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$emoji_release", "$serializer", "Companion", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @xs.m
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class EmojiCategories {
        @NotNull
        private static final Lazy[] $childSerializers;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final List<Emoji> activity;
        @NotNull
        private final List<Emoji> flags;
        @NotNull
        private final List<Emoji> food;
        @NotNull
        private final List<Emoji> nature;
        @NotNull
        private final List<Emoji> objects;
        @NotNull
        private final List<Emoji> people;
        @NotNull
        private final List<Emoji> symbols;
        @NotNull
        private final List<Emoji> travel;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/emoji/UnicodeEmojis$EmojiCategories$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/emoji/UnicodeEmojis$EmojiCategories;", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return UnicodeEmojis$EmojiCategories$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        static {
            o oVar = o.f31119e;
            $childSerializers = new Lazy[]{ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_;
                    _childSerializers$_anonymous_ = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_();
                    return _childSerializers$_anonymous_;
                }
            }), ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.g
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_$0;
                    _childSerializers$_anonymous_$0 = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_$0();
                    return _childSerializers$_anonymous_$0;
                }
            }), ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.h
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_$1;
                    _childSerializers$_anonymous_$1 = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_$1();
                    return _childSerializers$_anonymous_$1;
                }
            }), ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.i
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_$2;
                    _childSerializers$_anonymous_$2 = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_$2();
                    return _childSerializers$_anonymous_$2;
                }
            }), ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.j
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_$3;
                    _childSerializers$_anonymous_$3 = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_$3();
                    return _childSerializers$_anonymous_$3;
                }
            }), ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.k
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_$4;
                    _childSerializers$_anonymous_$4 = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_$4();
                    return _childSerializers$_anonymous_$4;
                }
            }), ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.l
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_$5;
                    _childSerializers$_anonymous_$5 = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_$5();
                    return _childSerializers$_anonymous_$5;
                }
            }), ir.l.a(oVar, new Function0() { // from class: com.discord.emoji.m
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    KSerializer _childSerializers$_anonymous_$6;
                    _childSerializers$_anonymous_$6 = UnicodeEmojis.EmojiCategories._childSerializers$_anonymous_$6();
                    return _childSerializers$_anonymous_$6;
                }
            })};
        }

        public /* synthetic */ EmojiCategories(int i10, List list, List list2, List list3, List list4, List list5, List list6, List list7, List list8, SerializationConstructorMarker serializationConstructorMarker) {
            if (255 != (i10 & SetSpanOperation.SPAN_MAX_PRIORITY)) {
                v1.b(i10, SetSpanOperation.SPAN_MAX_PRIORITY, UnicodeEmojis$EmojiCategories$$serializer.INSTANCE.getDescriptor());
            }
            this.people = list;
            this.nature = list2;
            this.food = list3;
            this.activity = list4;
            this.travel = list5;
            this.objects = list6;
            this.symbols = list7;
            this.flags = list8;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$1() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$2() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$3() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$4() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$5() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$6() {
            return new at.f(UnicodeEmojis$Emoji$$serializer.INSTANCE);
        }

        public static /* synthetic */ EmojiCategories copy$default(EmojiCategories emojiCategories, List list, List list2, List list3, List list4, List list5, List list6, List list7, List list8, int i10, Object obj) {
            List<Emoji> list9 = list;
            if ((i10 & 1) != 0) {
                list9 = emojiCategories.people;
            }
            List<Emoji> list10 = list2;
            if ((i10 & 2) != 0) {
                list10 = emojiCategories.nature;
            }
            List<Emoji> list11 = list3;
            if ((i10 & 4) != 0) {
                list11 = emojiCategories.food;
            }
            List<Emoji> list12 = list4;
            if ((i10 & 8) != 0) {
                list12 = emojiCategories.activity;
            }
            List<Emoji> list13 = list5;
            if ((i10 & 16) != 0) {
                list13 = emojiCategories.travel;
            }
            List<Emoji> list14 = list6;
            if ((i10 & 32) != 0) {
                list14 = emojiCategories.objects;
            }
            List<Emoji> list15 = list7;
            if ((i10 & 64) != 0) {
                list15 = emojiCategories.symbols;
            }
            List<Emoji> list16 = list8;
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list16 = emojiCategories.flags;
            }
            List list17 = list15;
            List list18 = list16;
            List list19 = list13;
            List list20 = list14;
            return emojiCategories.copy(list9, list10, list11, list12, list19, list20, list17, list18);
        }

        public static final /* synthetic */ void write$Self$emoji_release(EmojiCategories emojiCategories, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            Lazy[] lazyArr = $childSerializers;
            compositeEncoder.j(serialDescriptor, 0, (xs.o) lazyArr[0].getValue(), emojiCategories.people);
            compositeEncoder.j(serialDescriptor, 1, (xs.o) lazyArr[1].getValue(), emojiCategories.nature);
            compositeEncoder.j(serialDescriptor, 2, (xs.o) lazyArr[2].getValue(), emojiCategories.food);
            compositeEncoder.j(serialDescriptor, 3, (xs.o) lazyArr[3].getValue(), emojiCategories.activity);
            compositeEncoder.j(serialDescriptor, 4, (xs.o) lazyArr[4].getValue(), emojiCategories.travel);
            compositeEncoder.j(serialDescriptor, 5, (xs.o) lazyArr[5].getValue(), emojiCategories.objects);
            compositeEncoder.j(serialDescriptor, 6, (xs.o) lazyArr[6].getValue(), emojiCategories.symbols);
            compositeEncoder.j(serialDescriptor, 7, (xs.o) lazyArr[7].getValue(), emojiCategories.flags);
        }

        @NotNull
        public final List<Emoji> component1() {
            return this.people;
        }

        @NotNull
        public final List<Emoji> component2() {
            return this.nature;
        }

        @NotNull
        public final List<Emoji> component3() {
            return this.food;
        }

        @NotNull
        public final List<Emoji> component4() {
            return this.activity;
        }

        @NotNull
        public final List<Emoji> component5() {
            return this.travel;
        }

        @NotNull
        public final List<Emoji> component6() {
            return this.objects;
        }

        @NotNull
        public final List<Emoji> component7() {
            return this.symbols;
        }

        @NotNull
        public final List<Emoji> component8() {
            return this.flags;
        }

        @NotNull
        public final EmojiCategories copy(@NotNull List<Emoji> people, @NotNull List<Emoji> nature, @NotNull List<Emoji> food, @NotNull List<Emoji> activity, @NotNull List<Emoji> travel, @NotNull List<Emoji> objects, @NotNull List<Emoji> symbols, @NotNull List<Emoji> flags) {
            Intrinsics.checkNotNullParameter(people, "people");
            Intrinsics.checkNotNullParameter(nature, "nature");
            Intrinsics.checkNotNullParameter(food, "food");
            Intrinsics.checkNotNullParameter(activity, "activity");
            Intrinsics.checkNotNullParameter(travel, "travel");
            Intrinsics.checkNotNullParameter(objects, "objects");
            Intrinsics.checkNotNullParameter(symbols, "symbols");
            Intrinsics.checkNotNullParameter(flags, "flags");
            return new EmojiCategories(people, nature, food, activity, travel, objects, symbols, flags);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof EmojiCategories) {
                EmojiCategories emojiCategories = (EmojiCategories) obj;
                return Intrinsics.areEqual(this.people, emojiCategories.people) && Intrinsics.areEqual(this.nature, emojiCategories.nature) && Intrinsics.areEqual(this.food, emojiCategories.food) && Intrinsics.areEqual(this.activity, emojiCategories.activity) && Intrinsics.areEqual(this.travel, emojiCategories.travel) && Intrinsics.areEqual(this.objects, emojiCategories.objects) && Intrinsics.areEqual(this.symbols, emojiCategories.symbols) && Intrinsics.areEqual(this.flags, emojiCategories.flags);
            }
            return false;
        }

        @NotNull
        public final List<Emoji> getActivity() {
            return this.activity;
        }

        @NotNull
        public final List<Emoji> getFlags() {
            return this.flags;
        }

        @NotNull
        public final List<Emoji> getFood() {
            return this.food;
        }

        @NotNull
        public final List<Emoji> getNature() {
            return this.nature;
        }

        @NotNull
        public final List<Emoji> getObjects() {
            return this.objects;
        }

        @NotNull
        public final List<Emoji> getPeople() {
            return this.people;
        }

        @NotNull
        public final List<Emoji> getSymbols() {
            return this.symbols;
        }

        @NotNull
        public final List<Emoji> getTravel() {
            return this.travel;
        }

        public int hashCode() {
            return (((((((((((((this.people.hashCode() * 31) + this.nature.hashCode()) * 31) + this.food.hashCode()) * 31) + this.activity.hashCode()) * 31) + this.travel.hashCode()) * 31) + this.objects.hashCode()) * 31) + this.symbols.hashCode()) * 31) + this.flags.hashCode();
        }

        @NotNull
        public final Map<String, List<Emoji>> toMap() {
            return o0.m(v.a("people", this.people), v.a("nature", this.nature), v.a("food", this.food), v.a("activity", this.activity), v.a("travel", this.travel), v.a("objects", this.objects), v.a("symbols", this.symbols), v.a("flags", this.flags));
        }

        @NotNull
        public String toString() {
            List<Emoji> list = this.people;
            List<Emoji> list2 = this.nature;
            List<Emoji> list3 = this.food;
            List<Emoji> list4 = this.activity;
            List<Emoji> list5 = this.travel;
            List<Emoji> list6 = this.objects;
            List<Emoji> list7 = this.symbols;
            List<Emoji> list8 = this.flags;
            return "EmojiCategories(people=" + list + ", nature=" + list2 + ", food=" + list3 + ", activity=" + list4 + ", travel=" + list5 + ", objects=" + list6 + ", symbols=" + list7 + ", flags=" + list8 + ")";
        }

        public EmojiCategories(@NotNull List<Emoji> people, @NotNull List<Emoji> nature, @NotNull List<Emoji> food, @NotNull List<Emoji> activity, @NotNull List<Emoji> travel, @NotNull List<Emoji> objects, @NotNull List<Emoji> symbols, @NotNull List<Emoji> flags) {
            Intrinsics.checkNotNullParameter(people, "people");
            Intrinsics.checkNotNullParameter(nature, "nature");
            Intrinsics.checkNotNullParameter(food, "food");
            Intrinsics.checkNotNullParameter(activity, "activity");
            Intrinsics.checkNotNullParameter(travel, "travel");
            Intrinsics.checkNotNullParameter(objects, "objects");
            Intrinsics.checkNotNullParameter(symbols, "symbols");
            Intrinsics.checkNotNullParameter(flags, "flags");
            this.people = people;
            this.nature = nature;
            this.food = food;
            this.activity = activity;
            this.travel = travel;
            this.objects = objects;
            this.symbols = symbols;
            this.flags = flags;
        }
    }

    private UnicodeEmojis() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit emojiJsonParser$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object loadData(Context context, Continuation<? super EmojiCategories> continuation) {
        return gs.g.g(m0.b(), new UnicodeEmojis$loadData$2(context, null), continuation);
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x0058, code lost:
        if (r9.b(null, r0) == r1) goto L33;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0049  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x005f A[Catch: all -> 0x007a, TRY_LEAVE, TryCatch #1 {all -> 0x007a, blocks: (B:23:0x005b, B:25:0x005f), top: B:43:0x005b }] */
    /* JADX WARN: Removed duplicated region for block: B:32:0x007f  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x0084 A[Catch: all -> 0x0031, TRY_LEAVE, TryCatch #0 {all -> 0x0031, blocks: (B:13:0x002d, B:29:0x0071, B:33:0x0080, B:35:0x0084), top: B:41:0x002d }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object load(@org.jetbrains.annotations.NotNull android.content.Context r8, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation<? super java.util.Map<java.lang.String, ? extends java.util.List<com.discord.emoji.UnicodeEmojis.Emoji>>> r9) {
        /*
            r7 = this;
            boolean r0 = r9 instanceof com.discord.emoji.UnicodeEmojis$load$1
            if (r0 == 0) goto L13
            r0 = r9
            com.discord.emoji.UnicodeEmojis$load$1 r0 = (com.discord.emoji.UnicodeEmojis$load$1) r0
            int r1 = r0.label
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.label = r1
            goto L18
        L13:
            com.discord.emoji.UnicodeEmojis$load$1 r0 = new com.discord.emoji.UnicodeEmojis$load$1
            r0.<init>(r7, r9)
        L18:
            java.lang.Object r9 = r0.result
            java.lang.Object r1 = or.b.f()
            int r2 = r0.label
            r3 = 2
            r4 = 1
            r5 = 0
            if (r2 == 0) goto L49
            if (r2 == r4) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r8 = r0.L$0
            kotlinx.coroutines.sync.Mutex r8 = (kotlinx.coroutines.sync.Mutex) r8
            kotlin.c.b(r9)     // Catch: java.lang.Throwable -> L31
            goto L71
        L31:
            r9 = move-exception
            goto L8e
        L33:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r9)
            throw r8
        L3b:
            java.lang.Object r8 = r0.L$1
            kotlinx.coroutines.sync.Mutex r8 = (kotlinx.coroutines.sync.Mutex) r8
            java.lang.Object r2 = r0.L$0
            android.content.Context r2 = (android.content.Context) r2
            kotlin.c.b(r9)
            r9 = r8
            r8 = r2
            goto L5b
        L49:
            kotlin.c.b(r9)
            kotlinx.coroutines.sync.Mutex r9 = com.discord.emoji.UnicodeEmojis.emojiLoadingMutex
            r0.L$0 = r8
            r0.L$1 = r9
            r0.label = r4
            java.lang.Object r2 = r9.b(r5, r0)
            if (r2 != r1) goto L5b
            goto L6d
        L5b:
            java.util.Map<java.lang.String, ? extends java.util.List<com.discord.emoji.UnicodeEmojis$Emoji>> r2 = com.discord.emoji.UnicodeEmojis.emojis     // Catch: java.lang.Throwable -> L7a
            if (r2 != 0) goto L7f
            com.discord.emoji.UnicodeEmojis r2 = com.discord.emoji.UnicodeEmojis.INSTANCE     // Catch: java.lang.Throwable -> L7a
            r0.L$0 = r9     // Catch: java.lang.Throwable -> L7a
            r0.L$1 = r5     // Catch: java.lang.Throwable -> L7a
            r0.label = r3     // Catch: java.lang.Throwable -> L7a
            java.lang.Object r8 = r2.loadData(r8, r0)     // Catch: java.lang.Throwable -> L7a
            if (r8 != r1) goto L6e
        L6d:
            return r1
        L6e:
            r6 = r9
            r9 = r8
            r8 = r6
        L71:
            com.discord.emoji.UnicodeEmojis$EmojiCategories r9 = (com.discord.emoji.UnicodeEmojis.EmojiCategories) r9     // Catch: java.lang.Throwable -> L31
            java.util.Map r9 = r9.toMap()     // Catch: java.lang.Throwable -> L31
            com.discord.emoji.UnicodeEmojis.emojis = r9     // Catch: java.lang.Throwable -> L31
            goto L80
        L7a:
            r8 = move-exception
            r6 = r9
            r9 = r8
            r8 = r6
            goto L8e
        L7f:
            r8 = r9
        L80:
            java.util.Map<java.lang.String, ? extends java.util.List<com.discord.emoji.UnicodeEmojis$Emoji>> r9 = com.discord.emoji.UnicodeEmojis.emojis     // Catch: java.lang.Throwable -> L31
            if (r9 != 0) goto L8a
            java.lang.String r9 = "emojis"
            kotlin.jvm.internal.Intrinsics.throwUninitializedPropertyAccessException(r9)     // Catch: java.lang.Throwable -> L31
            r9 = r5
        L8a:
            r8.c(r5)
            return r9
        L8e:
            r8.c(r5)
            throw r9
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.emoji.UnicodeEmojis.load(android.content.Context, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
