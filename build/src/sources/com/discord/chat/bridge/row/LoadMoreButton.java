package com.discord.chat.bridge.row;

import at.p0;
import at.v1;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 /2\u00020\u0001:\u0002./B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\n\u0010\u000bBK\b\u0010\u0012\u0006\u0010\f\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0007HÆ\u0003J\u0010\u0010\u001d\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u0017J\u0010\u0010\u001e\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u0017JD\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0002\u0010 J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010$\u001a\u00020\u0007HÖ\u0001J\t\u0010%\u001a\u00020\u0005HÖ\u0001J%\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020\u00002\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020,H\u0001¢\u0006\u0002\b-R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0015\u0010\b\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0016\u0010\u0017R\u0015\u0010\t\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0019\u0010\u0017¨\u00060"}, d2 = {"Lcom/discord/chat/bridge/row/LoadMoreButton;", "", "action", "Lcom/discord/chat/bridge/row/LoadingAction;", "text", "", ViewProps.BACKGROUND_COLOR, "", "cornerRadius", ViewProps.COLOR, "<init>", "(Lcom/discord/chat/bridge/row/LoadingAction;Ljava/lang/String;ILjava/lang/Integer;Ljava/lang/Integer;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/row/LoadingAction;Ljava/lang/String;ILjava/lang/Integer;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getAction", "()Lcom/discord/chat/bridge/row/LoadingAction;", "getText", "()Ljava/lang/String;", "getBackgroundColor", "()I", "getCornerRadius", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getColor", "component1", "component2", "component3", "component4", "component5", "copy", "(Lcom/discord/chat/bridge/row/LoadingAction;Ljava/lang/String;ILjava/lang/Integer;Ljava/lang/Integer;)Lcom/discord/chat/bridge/row/LoadMoreButton;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LoadMoreButton {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final LoadingAction action;
    private final int backgroundColor;
    private final Integer color;
    private final Integer cornerRadius;
    @NotNull
    private final String text;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/LoadMoreButton$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/row/LoadMoreButton;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return LoadMoreButton$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ LoadMoreButton(int i10, LoadingAction loadingAction, String str, int i11, Integer num, Integer num2, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, LoadMoreButton$$serializer.INSTANCE.getDescriptor());
        }
        this.action = loadingAction;
        this.text = str;
        this.backgroundColor = i11;
        if ((i10 & 8) == 0) {
            this.cornerRadius = null;
        } else {
            this.cornerRadius = num;
        }
        if ((i10 & 16) == 0) {
            this.color = null;
        } else {
            this.color = num2;
        }
    }

    public static /* synthetic */ LoadMoreButton copy$default(LoadMoreButton loadMoreButton, LoadingAction loadingAction, String str, int i10, Integer num, Integer num2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            loadingAction = loadMoreButton.action;
        }
        if ((i11 & 2) != 0) {
            str = loadMoreButton.text;
        }
        if ((i11 & 4) != 0) {
            i10 = loadMoreButton.backgroundColor;
        }
        if ((i11 & 8) != 0) {
            num = loadMoreButton.cornerRadius;
        }
        if ((i11 & 16) != 0) {
            num2 = loadMoreButton.color;
        }
        Integer num3 = num2;
        int i12 = i10;
        return loadMoreButton.copy(loadingAction, str, i12, num, num3);
    }

    public static final /* synthetic */ void write$Self$chat_release(LoadMoreButton loadMoreButton, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.j(serialDescriptor, 0, LoadingAction$$serializer.INSTANCE, loadMoreButton.action);
        compositeEncoder.y(serialDescriptor, 1, loadMoreButton.text);
        compositeEncoder.w(serialDescriptor, 2, loadMoreButton.backgroundColor);
        if (compositeEncoder.A(serialDescriptor, 3) || loadMoreButton.cornerRadius != null) {
            compositeEncoder.z(serialDescriptor, 3, p0.f6864a, loadMoreButton.cornerRadius);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || loadMoreButton.color != null) {
            compositeEncoder.z(serialDescriptor, 4, p0.f6864a, loadMoreButton.color);
        }
    }

    @NotNull
    public final LoadingAction component1() {
        return this.action;
    }

    @NotNull
    public final String component2() {
        return this.text;
    }

    public final int component3() {
        return this.backgroundColor;
    }

    public final Integer component4() {
        return this.cornerRadius;
    }

    public final Integer component5() {
        return this.color;
    }

    @NotNull
    public final LoadMoreButton copy(@NotNull LoadingAction action, @NotNull String text, int i10, Integer num, Integer num2) {
        Intrinsics.checkNotNullParameter(action, "action");
        Intrinsics.checkNotNullParameter(text, "text");
        return new LoadMoreButton(action, text, i10, num, num2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LoadMoreButton) {
            LoadMoreButton loadMoreButton = (LoadMoreButton) obj;
            return Intrinsics.areEqual(this.action, loadMoreButton.action) && Intrinsics.areEqual(this.text, loadMoreButton.text) && this.backgroundColor == loadMoreButton.backgroundColor && Intrinsics.areEqual(this.cornerRadius, loadMoreButton.cornerRadius) && Intrinsics.areEqual(this.color, loadMoreButton.color);
        }
        return false;
    }

    @NotNull
    public final LoadingAction getAction() {
        return this.action;
    }

    public final int getBackgroundColor() {
        return this.backgroundColor;
    }

    public final Integer getColor() {
        return this.color;
    }

    public final Integer getCornerRadius() {
        return this.cornerRadius;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        int hashCode = ((((this.action.hashCode() * 31) + this.text.hashCode()) * 31) + Integer.hashCode(this.backgroundColor)) * 31;
        Integer num = this.cornerRadius;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.color;
        return hashCode2 + (num2 != null ? num2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        LoadingAction loadingAction = this.action;
        String str = this.text;
        int i10 = this.backgroundColor;
        Integer num = this.cornerRadius;
        Integer num2 = this.color;
        return "LoadMoreButton(action=" + loadingAction + ", text=" + str + ", backgroundColor=" + i10 + ", cornerRadius=" + num + ", color=" + num2 + ")";
    }

    public LoadMoreButton(@NotNull LoadingAction action, @NotNull String text, int i10, Integer num, Integer num2) {
        Intrinsics.checkNotNullParameter(action, "action");
        Intrinsics.checkNotNullParameter(text, "text");
        this.action = action;
        this.text = text;
        this.backgroundColor = i10;
        this.cornerRadius = num;
        this.color = num2;
    }

    public /* synthetic */ LoadMoreButton(LoadingAction loadingAction, String str, int i10, Integer num, Integer num2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(loadingAction, str, i10, (i11 & 8) != 0 ? null : num, (i11 & 16) != 0 ? null : num2);
    }
}
