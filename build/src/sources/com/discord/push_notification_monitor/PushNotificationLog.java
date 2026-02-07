package com.discord.push_notification_monitor;

import com.discord.push_notification_monitor.PushNotificationLog;
import ft.m;
import java.util.List;
import jt.f;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u001f2\u00020\u0001:\u0002\u001e\u001fB\u0017\u0012\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\u0004\b\u0005\u0010\u0006B+\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0005\u0010\u000bJ\u000f\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u0019\u0010\u000f\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0001J\u0013\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0013\u001a\u00020\bHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J%\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001cH\u0001¢\u0006\u0002\b\u001dR\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\r¨\u0006 "}, d2 = {"Lcom/discord/push_notification_monitor/PushNotificationLog;", "", "pushNotifications", "", "Lcom/discord/push_notification_monitor/PushNotificationMeta;", "<init>", "(Ljava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getPushNotifications", "()Ljava/util/List;", "component1", "copy", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$push_notification_monitor_release", "$serializer", "Companion", "push_notification_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PushNotificationLog {
    @NotNull
    private final List<PushNotificationMeta> pushNotifications;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {l.b(o.f48092e, new Function0() { // from class: w7.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = PushNotificationLog._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/push_notification_monitor/PushNotificationLog$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/push_notification_monitor/PushNotificationLog;", "push_notification_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return PushNotificationLog$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public PushNotificationLog() {
        this((List) null, 1, (DefaultConstructorMarker) null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(PushNotificationMeta$$serializer.INSTANCE);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ PushNotificationLog copy$default(PushNotificationLog pushNotificationLog, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = pushNotificationLog.pushNotifications;
        }
        return pushNotificationLog.copy(list);
    }

    public static final /* synthetic */ void write$Self$push_notification_monitor_release(PushNotificationLog pushNotificationLog, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.A(serialDescriptor, 0) || !Intrinsics.areEqual(pushNotificationLog.pushNotifications, CollectionsKt.l())) {
            compositeEncoder.s(serialDescriptor, 0, (ft.o) lazyArr[0].getValue(), pushNotificationLog.pushNotifications);
        }
    }

    @NotNull
    public final List<PushNotificationMeta> component1() {
        return this.pushNotifications;
    }

    @NotNull
    public final PushNotificationLog copy(@NotNull List<PushNotificationMeta> pushNotifications) {
        Intrinsics.checkNotNullParameter(pushNotifications, "pushNotifications");
        return new PushNotificationLog(pushNotifications);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof PushNotificationLog) && Intrinsics.areEqual(this.pushNotifications, ((PushNotificationLog) obj).pushNotifications);
    }

    @NotNull
    public final List<PushNotificationMeta> getPushNotifications() {
        return this.pushNotifications;
    }

    public int hashCode() {
        return this.pushNotifications.hashCode();
    }

    @NotNull
    public String toString() {
        List<PushNotificationMeta> list = this.pushNotifications;
        return "PushNotificationLog(pushNotifications=" + list + ")";
    }

    public /* synthetic */ PushNotificationLog(int i10, List list, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.pushNotifications = CollectionsKt.l();
        } else {
            this.pushNotifications = list;
        }
    }

    public PushNotificationLog(@NotNull List<PushNotificationMeta> pushNotifications) {
        Intrinsics.checkNotNullParameter(pushNotifications, "pushNotifications");
        this.pushNotifications = pushNotifications;
    }

    public /* synthetic */ PushNotificationLog(List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? CollectionsKt.l() : list);
    }
}
