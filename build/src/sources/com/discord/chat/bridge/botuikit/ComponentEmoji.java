package com.discord.chat.bridge.botuikit;

import at.n2;
import at.v1;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 *2\u00020\u0001:\u0002)*B=\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\t\u0010\nBK\b\u0010\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\t\u0010\u000fJ\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003JA\u0010\u001c\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u001d\u001a\u00020\u00072\b\u0010\u001e\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001f\u001a\u00020\fHÖ\u0001J\t\u0010 \u001a\u00020\u0003HÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0011¨\u0006+"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ComponentEmoji;", "", StackTraceHelper.ID_KEY, "", StackTraceHelper.NAME_KEY, "src", "animated", "", "surrogates", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()Ljava/lang/String;", "getName", "getSrc", "getAnimated", "()Z", "getSurrogates", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@xs.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ComponentEmoji {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean animated;

    /* renamed from: id  reason: collision with root package name */
    private final String f9643id;
    @NotNull
    private final String name;
    private final String src;
    private final String surrogates;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ComponentEmoji$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ComponentEmoji;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ComponentEmoji$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ComponentEmoji(int i10, String str, String str2, String str3, boolean z10, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (2 != (i10 & 2)) {
            v1.b(i10, 2, ComponentEmoji$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.f9643id = null;
        } else {
            this.f9643id = str;
        }
        this.name = str2;
        if ((i10 & 4) == 0) {
            this.src = null;
        } else {
            this.src = str3;
        }
        if ((i10 & 8) == 0) {
            this.animated = false;
        } else {
            this.animated = z10;
        }
        if ((i10 & 16) == 0) {
            this.surrogates = null;
        } else {
            this.surrogates = str4;
        }
    }

    public static /* synthetic */ ComponentEmoji copy$default(ComponentEmoji componentEmoji, String str, String str2, String str3, boolean z10, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = componentEmoji.f9643id;
        }
        if ((i10 & 2) != 0) {
            str2 = componentEmoji.name;
        }
        if ((i10 & 4) != 0) {
            str3 = componentEmoji.src;
        }
        if ((i10 & 8) != 0) {
            z10 = componentEmoji.animated;
        }
        if ((i10 & 16) != 0) {
            str4 = componentEmoji.surrogates;
        }
        String str5 = str4;
        String str6 = str3;
        return componentEmoji.copy(str, str2, str6, z10, str5);
    }

    public static final /* synthetic */ void write$Self$chat_release(ComponentEmoji componentEmoji, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.A(serialDescriptor, 0) || componentEmoji.f9643id != null) {
            compositeEncoder.z(serialDescriptor, 0, n2.f6848a, componentEmoji.f9643id);
        }
        compositeEncoder.y(serialDescriptor, 1, componentEmoji.name);
        if (compositeEncoder.A(serialDescriptor, 2) || componentEmoji.src != null) {
            compositeEncoder.z(serialDescriptor, 2, n2.f6848a, componentEmoji.src);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || componentEmoji.animated) {
            compositeEncoder.x(serialDescriptor, 3, componentEmoji.animated);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || componentEmoji.surrogates != null) {
            compositeEncoder.z(serialDescriptor, 4, n2.f6848a, componentEmoji.surrogates);
        }
    }

    public final String component1() {
        return this.f9643id;
    }

    @NotNull
    public final String component2() {
        return this.name;
    }

    public final String component3() {
        return this.src;
    }

    public final boolean component4() {
        return this.animated;
    }

    public final String component5() {
        return this.surrogates;
    }

    @NotNull
    public final ComponentEmoji copy(String str, @NotNull String name, String str2, boolean z10, String str3) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new ComponentEmoji(str, name, str2, z10, str3);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ComponentEmoji) {
            ComponentEmoji componentEmoji = (ComponentEmoji) obj;
            return Intrinsics.areEqual(this.f9643id, componentEmoji.f9643id) && Intrinsics.areEqual(this.name, componentEmoji.name) && Intrinsics.areEqual(this.src, componentEmoji.src) && this.animated == componentEmoji.animated && Intrinsics.areEqual(this.surrogates, componentEmoji.surrogates);
        }
        return false;
    }

    public final boolean getAnimated() {
        return this.animated;
    }

    public final String getId() {
        return this.f9643id;
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    public final String getSrc() {
        return this.src;
    }

    public final String getSurrogates() {
        return this.surrogates;
    }

    public int hashCode() {
        String str = this.f9643id;
        int hashCode = (((str == null ? 0 : str.hashCode()) * 31) + this.name.hashCode()) * 31;
        String str2 = this.src;
        int hashCode2 = (((hashCode + (str2 == null ? 0 : str2.hashCode())) * 31) + Boolean.hashCode(this.animated)) * 31;
        String str3 = this.surrogates;
        return hashCode2 + (str3 != null ? str3.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.f9643id;
        String str2 = this.name;
        String str3 = this.src;
        boolean z10 = this.animated;
        String str4 = this.surrogates;
        return "ComponentEmoji(id=" + str + ", name=" + str2 + ", src=" + str3 + ", animated=" + z10 + ", surrogates=" + str4 + ")";
    }

    public ComponentEmoji(String str, @NotNull String name, String str2, boolean z10, String str3) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f9643id = str;
        this.name = name;
        this.src = str2;
        this.animated = z10;
        this.surrogates = str3;
    }

    public /* synthetic */ ComponentEmoji(String str, String str2, String str3, boolean z10, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? false : z10, (i10 & 16) != 0 ? null : str4);
    }
}
