package com.discord.chat.bridge.polls;

import at.m;
import com.discord.emoji.RenderableEmoji;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.n2;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 )2\u00020\u0001:\u0002()B/\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tBA\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u0006\u0010\u0015\u001a\u00020\u0016J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÆ\u0003J5\u0010\u001b\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u00072\b\u0010\u001d\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001e\u001a\u00020\u000bHÖ\u0001J\t\u0010\u001f\u001a\u00020\u0003HÖ\u0001J%\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020\u00002\u0006\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020&H\u0001¢\u0006\u0002\b'R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014¨\u0006*"}, d2 = {"Lcom/discord/chat/bridge/polls/PollMediaEmoji;", "", StackTraceHelper.ID_KEY, "", StackTraceHelper.NAME_KEY, "displayName", "animated", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()Ljava/lang/String;", "getName", "getDisplayName", "getAnimated", "()Z", "renderable", "Lcom/discord/emoji/RenderableEmoji;", "component1", "component2", "component3", "component4", "copy", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollMediaEmoji {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean animated;
    private final String displayName;

    /* renamed from: id  reason: collision with root package name */
    private final String f8270id;
    @NotNull
    private final String name;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/polls/PollMediaEmoji$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/polls/PollMediaEmoji;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return PollMediaEmoji$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ PollMediaEmoji(int i10, String str, String str2, String str3, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, PollMediaEmoji$$serializer.INSTANCE.getDescriptor());
        }
        this.f8270id = str;
        this.name = str2;
        if ((i10 & 4) == 0) {
            this.displayName = null;
        } else {
            this.displayName = str3;
        }
        if ((i10 & 8) == 0) {
            this.animated = false;
        } else {
            this.animated = z10;
        }
    }

    public static /* synthetic */ PollMediaEmoji copy$default(PollMediaEmoji pollMediaEmoji, String str, String str2, String str3, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = pollMediaEmoji.f8270id;
        }
        if ((i10 & 2) != 0) {
            str2 = pollMediaEmoji.name;
        }
        if ((i10 & 4) != 0) {
            str3 = pollMediaEmoji.displayName;
        }
        if ((i10 & 8) != 0) {
            z10 = pollMediaEmoji.animated;
        }
        return pollMediaEmoji.copy(str, str2, str3, z10);
    }

    public static final /* synthetic */ void write$Self$chat_release(PollMediaEmoji pollMediaEmoji, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        n2 n2Var = n2.f20978a;
        compositeEncoder.s(serialDescriptor, 0, n2Var, pollMediaEmoji.f8270id);
        compositeEncoder.y(serialDescriptor, 1, pollMediaEmoji.name);
        if (compositeEncoder.z(serialDescriptor, 2) || pollMediaEmoji.displayName != null) {
            compositeEncoder.s(serialDescriptor, 2, n2Var, pollMediaEmoji.displayName);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || pollMediaEmoji.animated) {
            compositeEncoder.x(serialDescriptor, 3, pollMediaEmoji.animated);
        }
    }

    public final String component1() {
        return this.f8270id;
    }

    @NotNull
    public final String component2() {
        return this.name;
    }

    public final String component3() {
        return this.displayName;
    }

    public final boolean component4() {
        return this.animated;
    }

    @NotNull
    public final PollMediaEmoji copy(String str, @NotNull String name, String str2, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new PollMediaEmoji(str, name, str2, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PollMediaEmoji) {
            PollMediaEmoji pollMediaEmoji = (PollMediaEmoji) obj;
            return Intrinsics.areEqual(this.f8270id, pollMediaEmoji.f8270id) && Intrinsics.areEqual(this.name, pollMediaEmoji.name) && Intrinsics.areEqual(this.displayName, pollMediaEmoji.displayName) && this.animated == pollMediaEmoji.animated;
        }
        return false;
    }

    public final boolean getAnimated() {
        return this.animated;
    }

    public final String getDisplayName() {
        return this.displayName;
    }

    public final String getId() {
        return this.f8270id;
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    public int hashCode() {
        String str = this.f8270id;
        int hashCode = (((str == null ? 0 : str.hashCode()) * 31) + this.name.hashCode()) * 31;
        String str2 = this.displayName;
        return ((hashCode + (str2 != null ? str2.hashCode() : 0)) * 31) + Boolean.hashCode(this.animated);
    }

    @NotNull
    public final RenderableEmoji renderable() {
        Long t10;
        String str = this.f8270id;
        if (str != null && (t10 = StringsKt.t(str)) != null) {
            long longValue = t10.longValue();
            RenderableEmoji.Companion companion = RenderableEmoji.Companion;
            boolean z10 = this.animated;
            String str2 = this.displayName;
            if (str2 == null) {
                str2 = this.name;
            }
            RenderableEmoji.CustomWithEmojiId customWithEmojiId = companion.customWithEmojiId(longValue, z10, str2);
            if (customWithEmojiId != null) {
                return customWithEmojiId;
            }
        }
        return RenderableEmoji.Companion.unicode(this.name);
    }

    @NotNull
    public String toString() {
        String str = this.f8270id;
        String str2 = this.name;
        String str3 = this.displayName;
        boolean z10 = this.animated;
        return "PollMediaEmoji(id=" + str + ", name=" + str2 + ", displayName=" + str3 + ", animated=" + z10 + ")";
    }

    public PollMediaEmoji(String str, @NotNull String name, String str2, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f8270id = str;
        this.name = name;
        this.displayName = str2;
        this.animated = z10;
    }

    public /* synthetic */ PollMediaEmoji(String str, String str2, String str3, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? false : z10);
    }
}
