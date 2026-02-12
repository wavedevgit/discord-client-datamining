package com.withpersona.sdk2.inquiry.governmentid.video_capture;

import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lo.a;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0014\b\u0086\b\u0018\u00002\u00020\u0001BA\u0012\b\b\u0002\u0010\u0003\u001a\u00020\u0002\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u0004\u0012\n\b\u0001\u0010\n\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJP\u0010\u000f\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00022\u000e\b\u0002\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u00042\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00042\n\b\u0003\u0010\n\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\f\u001a\u00020\u000bHÆ\u0001¢\u0006\u0004\b\u000f\u0010\u0010J\u0010\u0010\u0011\u001a\u00020\tHÖ\u0001¢\u0006\u0004\b\u0011\u0010\u0012J\u0010\u0010\u0014\u001a\u00020\u0013HÖ\u0001¢\u0006\u0004\b\u0014\u0010\u0015J\u001a\u0010\u0017\u001a\u00020\u000b2\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0017\u0010\u0018R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0019\u0010\u001a\u001a\u0004\b\u0019\u0010\u001bR\u001d\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u00048\u0006¢\u0006\f\n\u0004\b\u001c\u0010\u001d\u001a\u0004\b\u001e\u0010\u001fR\u001d\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00048\u0006¢\u0006\f\n\u0004\b \u0010\u001d\u001a\u0004\b \u0010\u001fR\u0019\u0010\n\u001a\u0004\u0018\u00010\t8\u0006¢\u0006\f\n\u0004\b!\u0010\"\u001a\u0004\b!\u0010\u0012R\u0017\u0010\f\u001a\u00020\u000b8\u0006¢\u0006\f\n\u0004\b#\u0010$\u001a\u0004\b\u001c\u0010%R\u0011\u0010&\u001a\u00020\u000b8F¢\u0006\u0006\u001a\u0004\b#\u0010%¨\u0006'"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/video_capture/VideoCaptureConfig;", "", "", "maxRecordingLengthMs", "", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType;", "enabledCaptureFileTypes", "Llo/a;", "videoCaptureMethods", "", "webRtcJwt", "", "recordAudio", "<init>", "(JLjava/util/List;Ljava/util/List;Ljava/lang/String;Z)V", "copy", "(JLjava/util/List;Ljava/util/List;Ljava/lang/String;Z)Lcom/withpersona/sdk2/inquiry/governmentid/video_capture/VideoCaptureConfig;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "equals", "(Ljava/lang/Object;)Z", "a", "J", "()J", "b", "Ljava/util/List;", "getEnabledCaptureFileTypes", "()Ljava/util/List;", "c", "d", "Ljava/lang/String;", "e", "Z", "()Z", "isVideoCaptureEnabled", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class VideoCaptureConfig {

    /* renamed from: a  reason: collision with root package name */
    private final long f19671a;

    /* renamed from: b  reason: collision with root package name */
    private final List f19672b;

    /* renamed from: c  reason: collision with root package name */
    private final List f19673c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19674d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f19675e;

    public VideoCaptureConfig(long j10, @NotNull List<? extends NextStep.GovernmentId.CaptureFileType> enabledCaptureFileTypes, @NotNull List<? extends a> videoCaptureMethods, @g(name = "webRTCJwt") String str, boolean z10) {
        Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
        Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
        this.f19671a = j10;
        this.f19672b = enabledCaptureFileTypes;
        this.f19673c = videoCaptureMethods;
        this.f19674d = str;
        this.f19675e = z10;
    }

    public final long a() {
        return this.f19671a;
    }

    public final boolean b() {
        return this.f19675e;
    }

    public final List c() {
        return this.f19673c;
    }

    @NotNull
    public final VideoCaptureConfig copy(long j10, @NotNull List<? extends NextStep.GovernmentId.CaptureFileType> enabledCaptureFileTypes, @NotNull List<? extends a> videoCaptureMethods, @g(name = "webRTCJwt") String str, boolean z10) {
        Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
        Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
        return new VideoCaptureConfig(j10, enabledCaptureFileTypes, videoCaptureMethods, str, z10);
    }

    public final String d() {
        return this.f19674d;
    }

    public final boolean e() {
        return this.f19672b.contains(NextStep.GovernmentId.CaptureFileType.Video);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoCaptureConfig) {
            VideoCaptureConfig videoCaptureConfig = (VideoCaptureConfig) obj;
            return this.f19671a == videoCaptureConfig.f19671a && Intrinsics.areEqual(this.f19672b, videoCaptureConfig.f19672b) && Intrinsics.areEqual(this.f19673c, videoCaptureConfig.f19673c) && Intrinsics.areEqual(this.f19674d, videoCaptureConfig.f19674d) && this.f19675e == videoCaptureConfig.f19675e;
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((((Long.hashCode(this.f19671a) * 31) + this.f19672b.hashCode()) * 31) + this.f19673c.hashCode()) * 31;
        String str = this.f19674d;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + Boolean.hashCode(this.f19675e);
    }

    public String toString() {
        long j10 = this.f19671a;
        List list = this.f19672b;
        List list2 = this.f19673c;
        String str = this.f19674d;
        boolean z10 = this.f19675e;
        return "VideoCaptureConfig(maxRecordingLengthMs=" + j10 + ", enabledCaptureFileTypes=" + list + ", videoCaptureMethods=" + list2 + ", webRtcJwt=" + str + ", recordAudio=" + z10 + ")";
    }

    public /* synthetic */ VideoCaptureConfig(long j10, List list, List list2, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 120000L : j10, list, list2, str, z10);
    }
}
