package com.discord.share.react.events;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import ft.m;
import jt.n2;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 !2\u00020\u0001:\u0002 !B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006B/\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0005\u0010\u000bJ\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u001f\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\bHÖ\u0001J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001J%\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00002\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0001¢\u0006\u0002\b\u001fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\r¨\u0006\""}, d2 = {"Lcom/discord/share/react/events/ShareBroadcastReceiverAppClicked;", "Lcom/discord/reactevents/ReactEvent;", "app", "", "location", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getApp", "()Ljava/lang/String;", "getLocation", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$share_release", "$serializer", "Companion", "share_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ShareBroadcastReceiverAppClicked implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull

    /* renamed from: app  reason: collision with root package name */
    private final String f9697app;
    private final String location;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/share/react/events/ShareBroadcastReceiverAppClicked$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/share/react/events/ShareBroadcastReceiverAppClicked;", "share_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ShareBroadcastReceiverAppClicked$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ShareBroadcastReceiverAppClicked(int i10, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, ShareBroadcastReceiverAppClicked$$serializer.INSTANCE.getDescriptor());
        }
        this.f9697app = str;
        this.location = str2;
    }

    public static /* synthetic */ ShareBroadcastReceiverAppClicked copy$default(ShareBroadcastReceiverAppClicked shareBroadcastReceiverAppClicked, String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = shareBroadcastReceiverAppClicked.f9697app;
        }
        if ((i10 & 2) != 0) {
            str2 = shareBroadcastReceiverAppClicked.location;
        }
        return shareBroadcastReceiverAppClicked.copy(str, str2);
    }

    public static final /* synthetic */ void write$Self$share_release(ShareBroadcastReceiverAppClicked shareBroadcastReceiverAppClicked, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.z(serialDescriptor, 0, shareBroadcastReceiverAppClicked.f9697app);
        compositeEncoder.l(serialDescriptor, 1, n2.f31089a, shareBroadcastReceiverAppClicked.location);
    }

    @NotNull
    public final String component1() {
        return this.f9697app;
    }

    public final String component2() {
        return this.location;
    }

    @NotNull
    public final ShareBroadcastReceiverAppClicked copy(@NotNull String app2, String str) {
        Intrinsics.checkNotNullParameter(app2, "app");
        return new ShareBroadcastReceiverAppClicked(app2, str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ShareBroadcastReceiverAppClicked) {
            ShareBroadcastReceiverAppClicked shareBroadcastReceiverAppClicked = (ShareBroadcastReceiverAppClicked) obj;
            return Intrinsics.areEqual(this.f9697app, shareBroadcastReceiverAppClicked.f9697app) && Intrinsics.areEqual(this.location, shareBroadcastReceiverAppClicked.location);
        }
        return false;
    }

    @NotNull
    public final String getApp() {
        return this.f9697app;
    }

    public final String getLocation() {
        return this.location;
    }

    public int hashCode() {
        int hashCode = this.f9697app.hashCode() * 31;
        String str = this.location;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.f9697app;
        String str2 = this.location;
        return "ShareBroadcastReceiverAppClicked(app=" + str + ", location=" + str2 + ")";
    }

    public ShareBroadcastReceiverAppClicked(@NotNull String app2, String str) {
        Intrinsics.checkNotNullParameter(app2, "app");
        this.f9697app = app2;
        this.location = str;
    }
}
