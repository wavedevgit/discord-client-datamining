package com.discord.chat.reactevents;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\b\u0010\n\u001a\u00020\u000bH\u0016J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u001f\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0016"}, d2 = {"Lcom/discord/chat/reactevents/TapSeparatorData;", "Lcom/discord/reactevents/ReactEvent;", "type", "", "context", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getType", "()Ljava/lang/String;", "getContext", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapSeparatorData implements ReactEvent {
    private final String context;
    @NotNull
    private final String type;

    public TapSeparatorData(@NotNull String type, String str) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.type = type;
        this.context = str;
    }

    public static /* synthetic */ TapSeparatorData copy$default(TapSeparatorData tapSeparatorData, String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapSeparatorData.type;
        }
        if ((i10 & 2) != 0) {
            str2 = tapSeparatorData.context;
        }
        return tapSeparatorData.copy(str, str2);
    }

    @NotNull
    public final String component1() {
        return this.type;
    }

    public final String component2() {
        return this.context;
    }

    @NotNull
    public final TapSeparatorData copy(@NotNull String type, String str) {
        Intrinsics.checkNotNullParameter(type, "type");
        return new TapSeparatorData(type, str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapSeparatorData) {
            TapSeparatorData tapSeparatorData = (TapSeparatorData) obj;
            return Intrinsics.areEqual(this.type, tapSeparatorData.type) && Intrinsics.areEqual(this.context, tapSeparatorData.context);
        }
        return false;
    }

    public final String getContext() {
        return this.context;
    }

    @NotNull
    public final String getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = this.type.hashCode() * 31;
        String str = this.context;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        WritableNativeMap nativeMapOf = NativeMapExtensionsKt.nativeMapOf(v.a("type", this.type));
        String str = this.context;
        if (str != null) {
            nativeMapOf.putString("context", str);
        }
        return nativeMapOf;
    }

    @NotNull
    public String toString() {
        String str = this.type;
        String str2 = this.context;
        return "TapSeparatorData(type=" + str + ", context=" + str2 + ")";
    }

    public /* synthetic */ TapSeparatorData(String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : str2);
    }
}
