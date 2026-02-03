package com.discord.chat.bridge.embed;

import at.m;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.n2;
import dt.v1;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.l;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 *2\u00020\u0001:\u0002)*B3\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bBC\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0003HÆ\u0003J7\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001f\u001a\u00020\nHÖ\u0001J\t\u0010 \u001a\u00020\u0003HÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000fR\u001d\u0010\u0013\u001a\u0004\u0018\u00010\u00038FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\u0015\u0010\u0016\u001a\u0004\b\u0014\u0010\u000f¨\u0006+"}, d2 = {"Lcom/discord/chat/bridge/embed/EmbedAuthor;", "", StackTraceHelper.NAME_KEY, "", "url", "iconURL", "iconProxyURL", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getName", "()Ljava/lang/String;", "getUrl", "getIconURL", "getIconProxyURL", "imageUrl", "getImageUrl", "imageUrl$delegate", "Lkotlin/Lazy;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbedAuthor {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String iconProxyURL;
    private final String iconURL;
    @NotNull
    private final Lazy imageUrl$delegate;
    @NotNull
    private final String name;
    private final String url;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/embed/EmbedAuthor$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/embed/EmbedAuthor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return EmbedAuthor$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ EmbedAuthor(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, EmbedAuthor$$serializer.INSTANCE.getDescriptor());
        }
        this.name = str;
        if ((i10 & 2) == 0) {
            this.url = null;
        } else {
            this.url = str2;
        }
        if ((i10 & 4) == 0) {
            this.iconURL = null;
        } else {
            this.iconURL = str3;
        }
        if ((i10 & 8) == 0) {
            this.iconProxyURL = null;
        } else {
            this.iconProxyURL = str4;
        }
        this.imageUrl$delegate = l.a(new Function0() { // from class: com.discord.chat.bridge.embed.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                String str5;
                str5 = EmbedAuthor.this.iconProxyURL;
                return str5;
            }
        });
    }

    public static /* synthetic */ EmbedAuthor copy$default(EmbedAuthor embedAuthor, String str, String str2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = embedAuthor.name;
        }
        if ((i10 & 2) != 0) {
            str2 = embedAuthor.url;
        }
        if ((i10 & 4) != 0) {
            str3 = embedAuthor.iconURL;
        }
        if ((i10 & 8) != 0) {
            str4 = embedAuthor.iconProxyURL;
        }
        return embedAuthor.copy(str, str2, str3, str4);
    }

    public static final /* synthetic */ void write$Self$chat_release(EmbedAuthor embedAuthor, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, embedAuthor.name);
        if (compositeEncoder.z(serialDescriptor, 1) || embedAuthor.url != null) {
            compositeEncoder.s(serialDescriptor, 1, n2.f20978a, embedAuthor.url);
        }
        if (compositeEncoder.z(serialDescriptor, 2) || embedAuthor.iconURL != null) {
            compositeEncoder.s(serialDescriptor, 2, n2.f20978a, embedAuthor.iconURL);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || embedAuthor.iconProxyURL != null) {
            compositeEncoder.s(serialDescriptor, 3, n2.f20978a, embedAuthor.iconProxyURL);
        }
    }

    @NotNull
    public final String component1() {
        return this.name;
    }

    public final String component2() {
        return this.url;
    }

    public final String component3() {
        return this.iconURL;
    }

    public final String component4() {
        return this.iconProxyURL;
    }

    @NotNull
    public final EmbedAuthor copy(@NotNull String name, String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new EmbedAuthor(name, str, str2, str3);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EmbedAuthor) {
            EmbedAuthor embedAuthor = (EmbedAuthor) obj;
            return Intrinsics.areEqual(this.name, embedAuthor.name) && Intrinsics.areEqual(this.url, embedAuthor.url) && Intrinsics.areEqual(this.iconURL, embedAuthor.iconURL) && Intrinsics.areEqual(this.iconProxyURL, embedAuthor.iconProxyURL);
        }
        return false;
    }

    public final String getIconProxyURL() {
        return this.iconProxyURL;
    }

    public final String getIconURL() {
        return this.iconURL;
    }

    public final String getImageUrl() {
        return (String) this.imageUrl$delegate.getValue();
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    public final String getUrl() {
        return this.url;
    }

    public int hashCode() {
        int hashCode = this.name.hashCode() * 31;
        String str = this.url;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.iconURL;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.iconProxyURL;
        return hashCode3 + (str3 != null ? str3.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.name;
        String str2 = this.url;
        String str3 = this.iconURL;
        String str4 = this.iconProxyURL;
        return "EmbedAuthor(name=" + str + ", url=" + str2 + ", iconURL=" + str3 + ", iconProxyURL=" + str4 + ")";
    }

    public EmbedAuthor(@NotNull String name, String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.name = name;
        this.url = str;
        this.iconURL = str2;
        this.iconProxyURL = str3;
        this.imageUrl$delegate = l.a(new Function0() { // from class: com.discord.chat.bridge.embed.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                String str4;
                str4 = EmbedAuthor.this.iconProxyURL;
                return str4;
            }
        });
    }

    public /* synthetic */ EmbedAuthor(String str, String str2, String str3, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4);
    }
}
