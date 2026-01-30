package com.discord.chat.bridge.activities;

import at.f;
import at.n2;
import at.v1;
import com.discord.chat.bridge.activities.ActivityInstanceEmbed;
import com.discord.chat.bridge.codedlinks.AppMessageEmbedImpl;
import com.discord.chat.bridge.codedlinks.AppMessageEmbedImpl$$serializer;
import com.discord.primitives.ApplicationId;
import com.discord.primitives.ApplicationId$$serializer;
import ir.l;
import ir.o;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 32\u00020\u0001:\u000223B=\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0010\b\u0002\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u000b\u0010\fBS\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u000b\u0010\u0011J\u0010\u0010\u001c\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001d\u0010\u0013J\t\u0010\u001e\u001a\u00020\u0005HÆ\u0003J\u0011\u0010\u001f\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u0007HÆ\u0003J\t\u0010 \u001a\u00020\tHÆ\u0003J\u000b\u0010!\u001a\u0004\u0018\u00010\u0005HÆ\u0003JL\u0010\"\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\u0010\b\u0002\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0004\b#\u0010$J\u0013\u0010%\u001a\u00020&2\b\u0010'\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010(\u001a\u00020\u000eHÖ\u0001J\t\u0010)\u001a\u00020\u0005HÖ\u0001J%\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020\u00002\u0006\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u000200H\u0001¢\u0006\u0002\b1R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0014\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0019\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0013\u0010\n\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0016¨\u00064"}, d2 = {"Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;", "", "applicationId", "Lcom/discord/primitives/ApplicationId;", "instanceId", "", "participantAvatarUris", "", "appMessageEmbedModel", "Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "participantsDescription", "<init>", "(JLjava/lang/String;Ljava/util/List;Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/ApplicationId;Ljava/lang/String;Ljava/util/List;Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getApplicationId-VavddsQ", "()J", "J", "getInstanceId", "()Ljava/lang/String;", "getParticipantAvatarUris", "()Ljava/util/List;", "getAppMessageEmbedModel", "()Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "getParticipantsDescription", "component1", "component1-VavddsQ", "component2", "component3", "component4", "component5", "copy", "copy-Nxq1Yvc", "(JLjava/lang/String;Ljava/util/List;Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;Ljava/lang/String;)Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ActivityInstanceEmbed {
    @NotNull
    private final AppMessageEmbedImpl appMessageEmbedModel;
    private final long applicationId;
    @NotNull
    private final String instanceId;
    private final List<String> participantAvatarUris;
    private final String participantsDescription;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, l.a(o.f31119e, new Function0() { // from class: k6.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = ActivityInstanceEmbed._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ActivityInstanceEmbed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ActivityInstanceEmbed(int i10, ApplicationId applicationId, String str, List list, AppMessageEmbedImpl appMessageEmbedImpl, String str2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, applicationId, str, list, appMessageEmbedImpl, str2, serializationConstructorMarker);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(n2.f6848a);
    }

    /* renamed from: copy-Nxq1Yvc$default  reason: not valid java name */
    public static /* synthetic */ ActivityInstanceEmbed m239copyNxq1Yvc$default(ActivityInstanceEmbed activityInstanceEmbed, long j10, String str, List list, AppMessageEmbedImpl appMessageEmbedImpl, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = activityInstanceEmbed.applicationId;
        }
        long j11 = j10;
        if ((i10 & 2) != 0) {
            str = activityInstanceEmbed.instanceId;
        }
        String str3 = str;
        List<String> list2 = list;
        if ((i10 & 4) != 0) {
            list2 = activityInstanceEmbed.participantAvatarUris;
        }
        List list3 = list2;
        if ((i10 & 8) != 0) {
            appMessageEmbedImpl = activityInstanceEmbed.appMessageEmbedModel;
        }
        AppMessageEmbedImpl appMessageEmbedImpl2 = appMessageEmbedImpl;
        if ((i10 & 16) != 0) {
            str2 = activityInstanceEmbed.participantsDescription;
        }
        return activityInstanceEmbed.m241copyNxq1Yvc(j11, str3, list3, appMessageEmbedImpl2, str2);
    }

    public static final /* synthetic */ void write$Self$chat_release(ActivityInstanceEmbed activityInstanceEmbed, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.j(serialDescriptor, 0, ApplicationId$$serializer.INSTANCE, ApplicationId.m1045boximpl(activityInstanceEmbed.applicationId));
        compositeEncoder.y(serialDescriptor, 1, activityInstanceEmbed.instanceId);
        if (compositeEncoder.A(serialDescriptor, 2) || activityInstanceEmbed.participantAvatarUris != null) {
            compositeEncoder.z(serialDescriptor, 2, (xs.o) lazyArr[2].getValue(), activityInstanceEmbed.participantAvatarUris);
        }
        compositeEncoder.j(serialDescriptor, 3, AppMessageEmbedImpl$$serializer.INSTANCE, activityInstanceEmbed.appMessageEmbedModel);
        if (compositeEncoder.A(serialDescriptor, 4) || activityInstanceEmbed.participantsDescription != null) {
            compositeEncoder.z(serialDescriptor, 4, n2.f6848a, activityInstanceEmbed.participantsDescription);
        }
    }

    /* renamed from: component1-VavddsQ  reason: not valid java name */
    public final long m240component1VavddsQ() {
        return this.applicationId;
    }

    @NotNull
    public final String component2() {
        return this.instanceId;
    }

    public final List<String> component3() {
        return this.participantAvatarUris;
    }

    @NotNull
    public final AppMessageEmbedImpl component4() {
        return this.appMessageEmbedModel;
    }

    public final String component5() {
        return this.participantsDescription;
    }

    @NotNull
    /* renamed from: copy-Nxq1Yvc  reason: not valid java name */
    public final ActivityInstanceEmbed m241copyNxq1Yvc(long j10, @NotNull String instanceId, List<String> list, @NotNull AppMessageEmbedImpl appMessageEmbedModel, String str) {
        Intrinsics.checkNotNullParameter(instanceId, "instanceId");
        Intrinsics.checkNotNullParameter(appMessageEmbedModel, "appMessageEmbedModel");
        return new ActivityInstanceEmbed(j10, instanceId, list, appMessageEmbedModel, str, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ActivityInstanceEmbed) {
            ActivityInstanceEmbed activityInstanceEmbed = (ActivityInstanceEmbed) obj;
            return ApplicationId.m1049equalsimpl0(this.applicationId, activityInstanceEmbed.applicationId) && Intrinsics.areEqual(this.instanceId, activityInstanceEmbed.instanceId) && Intrinsics.areEqual(this.participantAvatarUris, activityInstanceEmbed.participantAvatarUris) && Intrinsics.areEqual(this.appMessageEmbedModel, activityInstanceEmbed.appMessageEmbedModel) && Intrinsics.areEqual(this.participantsDescription, activityInstanceEmbed.participantsDescription);
        }
        return false;
    }

    @NotNull
    public final AppMessageEmbedImpl getAppMessageEmbedModel() {
        return this.appMessageEmbedModel;
    }

    /* renamed from: getApplicationId-VavddsQ  reason: not valid java name */
    public final long m242getApplicationIdVavddsQ() {
        return this.applicationId;
    }

    @NotNull
    public final String getInstanceId() {
        return this.instanceId;
    }

    public final List<String> getParticipantAvatarUris() {
        return this.participantAvatarUris;
    }

    public final String getParticipantsDescription() {
        return this.participantsDescription;
    }

    public int hashCode() {
        int m1050hashCodeimpl = ((ApplicationId.m1050hashCodeimpl(this.applicationId) * 31) + this.instanceId.hashCode()) * 31;
        List<String> list = this.participantAvatarUris;
        int hashCode = (((m1050hashCodeimpl + (list == null ? 0 : list.hashCode())) * 31) + this.appMessageEmbedModel.hashCode()) * 31;
        String str = this.participantsDescription;
        return hashCode + (str != null ? str.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1052toStringimpl = ApplicationId.m1052toStringimpl(this.applicationId);
        String str = this.instanceId;
        List<String> list = this.participantAvatarUris;
        AppMessageEmbedImpl appMessageEmbedImpl = this.appMessageEmbedModel;
        String str2 = this.participantsDescription;
        return "ActivityInstanceEmbed(applicationId=" + m1052toStringimpl + ", instanceId=" + str + ", participantAvatarUris=" + list + ", appMessageEmbedModel=" + appMessageEmbedImpl + ", participantsDescription=" + str2 + ")";
    }

    public /* synthetic */ ActivityInstanceEmbed(long j10, String str, List list, AppMessageEmbedImpl appMessageEmbedImpl, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, list, appMessageEmbedImpl, str2);
    }

    private /* synthetic */ ActivityInstanceEmbed(int i10, ApplicationId applicationId, String str, List list, AppMessageEmbedImpl appMessageEmbedImpl, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (11 != (i10 & 11)) {
            v1.b(i10, 11, ActivityInstanceEmbed$$serializer.INSTANCE.getDescriptor());
        }
        this.applicationId = applicationId.m1054unboximpl();
        this.instanceId = str;
        if ((i10 & 4) == 0) {
            this.participantAvatarUris = null;
        } else {
            this.participantAvatarUris = list;
        }
        this.appMessageEmbedModel = appMessageEmbedImpl;
        if ((i10 & 16) == 0) {
            this.participantsDescription = null;
        } else {
            this.participantsDescription = str2;
        }
    }

    private ActivityInstanceEmbed(long j10, String instanceId, List<String> list, AppMessageEmbedImpl appMessageEmbedModel, String str) {
        Intrinsics.checkNotNullParameter(instanceId, "instanceId");
        Intrinsics.checkNotNullParameter(appMessageEmbedModel, "appMessageEmbedModel");
        this.applicationId = j10;
        this.instanceId = instanceId;
        this.participantAvatarUris = list;
        this.appMessageEmbedModel = appMessageEmbedModel;
        this.participantsDescription = str;
    }

    public /* synthetic */ ActivityInstanceEmbed(long j10, String str, List list, AppMessageEmbedImpl appMessageEmbedImpl, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, (i10 & 4) != 0 ? null : list, appMessageEmbedImpl, (i10 & 16) != 0 ? null : str2, null);
    }
}
