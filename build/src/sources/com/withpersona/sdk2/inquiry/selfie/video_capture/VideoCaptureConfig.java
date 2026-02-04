package com.withpersona.sdk2.inquiry.selfie.video_capture;

import android.content.Context;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.util.Collection;
import java.util.List;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.c;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import mp.f;
import org.jetbrains.annotations.NotNull;
import vn.a;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\b\n\u0002\b\u0012\b\u0086\b\u0018\u00002\u00020\u0001BA\u0012\b\b\u0002\u0010\u0003\u001a\u00020\u0002\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u0004\u0012\n\b\u0001\u0010\n\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ1\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00070\u00132\b\u0010\u000f\u001a\u0004\u0018\u00010\u000b2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0012\u001a\u00020\u0011H\u0002¢\u0006\u0004\b\u0014\u0010\u0015J/\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00132\b\u0010\u000f\u001a\u0004\u0018\u00010\u000b2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0012\u001a\u00020\u0011¢\u0006\u0004\b\u0016\u0010\u0015J/\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00132\b\u0010\u000f\u001a\u0004\u0018\u00010\u000b2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0012\u001a\u00020\u0011¢\u0006\u0004\b\u0017\u0010\u0015JP\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00022\u000e\b\u0002\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u00042\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00042\n\b\u0003\u0010\n\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\f\u001a\u00020\u000bHÆ\u0001¢\u0006\u0004\b\u0018\u0010\u0019J\u0010\u0010\u001a\u001a\u00020\tHÖ\u0001¢\u0006\u0004\b\u001a\u0010\u001bJ\u0010\u0010\u001d\u001a\u00020\u001cHÖ\u0001¢\u0006\u0004\b\u001d\u0010\u001eJ\u001a\u0010 \u001a\u00020\u000b2\b\u0010\u001f\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b \u0010!R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\"\u0010#\u001a\u0004\b\"\u0010$R\u001d\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u00048\u0006¢\u0006\f\n\u0004\b%\u0010&\u001a\u0004\b'\u0010(R\u001d\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00048\u0006¢\u0006\f\n\u0004\b)\u0010&\u001a\u0004\b*\u0010(R\u0019\u0010\n\u001a\u0004\u0018\u00010\t8\u0006¢\u0006\f\n\u0004\b\u0016\u0010+\u001a\u0004\b)\u0010\u001bR\u0017\u0010\f\u001a\u00020\u000b8\u0006¢\u0006\f\n\u0004\b\u0014\u0010,\u001a\u0004\b%\u0010-¨\u0006."}, d2 = {"Lcom/withpersona/sdk2/inquiry/selfie/video_capture/VideoCaptureConfig;", "", "", "maxRecordingLengthMs", "", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType;", "enabledCaptureFileTypes", "Lvn/a;", "videoCaptureMethods", "", "webRtcJwt", "", "recordAudio", "<init>", "(JLjava/util/List;Ljava/util/List;Ljava/lang/String;Z)V", "hasExhaustedWebRtcConnectionAttempts", "canUseLocalVideoAsFallback", "Landroid/content/Context;", "applicationContext", "Lkotlin/Result;", "e", "(Ljava/lang/Boolean;Ljava/lang/Boolean;Landroid/content/Context;)Ljava/lang/Object;", "d", "f", "copy", "(JLjava/util/List;Ljava/util/List;Ljava/lang/String;Z)Lcom/withpersona/sdk2/inquiry/selfie/video_capture/VideoCaptureConfig;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "equals", "(Ljava/lang/Object;)Z", "a", "J", "()J", "b", "Ljava/util/List;", "getEnabledCaptureFileTypes", "()Ljava/util/List;", "c", "getVideoCaptureMethods", "Ljava/lang/String;", "Z", "()Z", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nVideoCaptureConfig.kt\nKotlin\n*S Kotlin\n*F\n+ 1 VideoCaptureConfig.kt\ncom/withpersona/sdk2/inquiry/selfie/video_capture/VideoCaptureConfig\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,104:1\n1755#2,3:105\n*S KotlinDebug\n*F\n+ 1 VideoCaptureConfig.kt\ncom/withpersona/sdk2/inquiry/selfie/video_capture/VideoCaptureConfig\n*L\n77#1:105,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class VideoCaptureConfig {

    /* renamed from: a  reason: collision with root package name */
    private final long f19026a;

    /* renamed from: b  reason: collision with root package name */
    private final List f19027b;

    /* renamed from: c  reason: collision with root package name */
    private final List f19028c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19029d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f19030e;

    public VideoCaptureConfig(long j10, @NotNull List<? extends NextStep.Selfie.CaptureFileType> enabledCaptureFileTypes, @NotNull List<? extends a> videoCaptureMethods, @g(name = "webRTCJwt") String str, boolean z10) {
        Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
        Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
        this.f19026a = j10;
        this.f19027b = enabledCaptureFileTypes;
        this.f19028c = videoCaptureMethods;
        this.f19029d = str;
        this.f19030e = z10;
    }

    private final Object e(Boolean bool, Boolean bool2, Context context) {
        boolean z10;
        boolean z11;
        boolean z12 = false;
        boolean z13 = true;
        if (this.f19027b.contains(NextStep.Selfie.CaptureFileType.Video) && CollectionsKt.firstOrNull(this.f19028c) == a.f51697d) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (bool != null && bool2 != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 && !z11) {
            List list = this.f19028c;
            a aVar = a.f51698e;
            if (list.contains(aVar)) {
                if (f.e(context)) {
                    Result.a aVar2 = Result.f32461e;
                    return Result.b(c.a(new RuntimeException()));
                }
                return Result.b(aVar);
            }
            List<NextStep.Selfie.CaptureFileType> list2 = this.f19027b;
            if (!(list2 instanceof Collection) || !list2.isEmpty()) {
                for (NextStep.Selfie.CaptureFileType captureFileType : list2) {
                    if (captureFileType != NextStep.Selfie.CaptureFileType.Video && captureFileType != NextStep.Selfie.CaptureFileType.Unknown) {
                        if (f.e(context)) {
                            Result.a aVar3 = Result.f32461e;
                            return Result.b(c.a(new RuntimeException()));
                        }
                        Result.a aVar4 = Result.f32461e;
                        return Result.b(a.f51699i);
                    }
                }
            }
            Result.a aVar5 = Result.f32461e;
            return Result.b(c.a(new RuntimeException()));
        }
        if (bool2 != null) {
            z13 = bool2.booleanValue();
        }
        if (z13) {
            List list3 = this.f19028c;
            a aVar6 = a.f51698e;
            if (list3.contains(aVar6)) {
                return Result.b(aVar6);
            }
        }
        if (bool != null) {
            z12 = bool.booleanValue();
        }
        if (z12) {
            Result.a aVar7 = Result.f32461e;
            return Result.b(a.f51699i);
        }
        Result.a aVar8 = Result.f32461e;
        a aVar9 = (a) CollectionsKt.firstOrNull(this.f19028c);
        if (aVar9 == null) {
            aVar9 = a.f51699i;
        }
        return Result.b(aVar9);
    }

    public final long a() {
        return this.f19026a;
    }

    public final boolean b() {
        return this.f19030e;
    }

    public final String c() {
        return this.f19029d;
    }

    @NotNull
    public final VideoCaptureConfig copy(long j10, @NotNull List<? extends NextStep.Selfie.CaptureFileType> enabledCaptureFileTypes, @NotNull List<? extends a> videoCaptureMethods, @g(name = "webRTCJwt") String str, boolean z10) {
        Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
        Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
        return new VideoCaptureConfig(j10, enabledCaptureFileTypes, videoCaptureMethods, str, z10);
    }

    public final Object d(Boolean bool, Boolean bool2, Context applicationContext) {
        boolean z10;
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        if (!this.f19027b.contains(NextStep.Selfie.CaptureFileType.Video)) {
            Result.a aVar = Result.f32461e;
            return Result.b(Boolean.FALSE);
        }
        Object f10 = f(bool, bool2, applicationContext);
        Throwable e10 = Result.e(f10);
        if (e10 == null) {
            a aVar2 = (a) f10;
            if (aVar2 != a.f51697d && aVar2 != a.f51698e) {
                z10 = false;
            } else {
                z10 = true;
            }
            return Result.b(Boolean.valueOf(z10));
        }
        return Result.b(c.a(e10));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoCaptureConfig) {
            VideoCaptureConfig videoCaptureConfig = (VideoCaptureConfig) obj;
            return this.f19026a == videoCaptureConfig.f19026a && Intrinsics.areEqual(this.f19027b, videoCaptureConfig.f19027b) && Intrinsics.areEqual(this.f19028c, videoCaptureConfig.f19028c) && Intrinsics.areEqual(this.f19029d, videoCaptureConfig.f19029d) && this.f19030e == videoCaptureConfig.f19030e;
        }
        return false;
    }

    public final Object f(Boolean bool, Boolean bool2, Context applicationContext) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        if (this.f19027b.contains(NextStep.Selfie.CaptureFileType.Video)) {
            return e(bool, bool2, applicationContext);
        }
        Result.a aVar = Result.f32461e;
        return Result.b(a.f51699i);
    }

    public int hashCode() {
        int hashCode = ((((Long.hashCode(this.f19026a) * 31) + this.f19027b.hashCode()) * 31) + this.f19028c.hashCode()) * 31;
        String str = this.f19029d;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + Boolean.hashCode(this.f19030e);
    }

    public String toString() {
        long j10 = this.f19026a;
        List list = this.f19027b;
        List list2 = this.f19028c;
        String str = this.f19029d;
        boolean z10 = this.f19030e;
        return "VideoCaptureConfig(maxRecordingLengthMs=" + j10 + ", enabledCaptureFileTypes=" + list + ", videoCaptureMethods=" + list2 + ", webRtcJwt=" + str + ", recordAudio=" + z10 + ")";
    }

    public /* synthetic */ VideoCaptureConfig(long j10, List list, List list2, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE : j10, list, list2, str, z10);
    }
}
