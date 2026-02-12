package ho;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27568a;

    /* renamed from: b  reason: collision with root package name */
    private final ko.a f27569b;

    /* renamed from: c  reason: collision with root package name */
    private final gq.c f27570c;

    /* renamed from: d  reason: collision with root package name */
    private final m f27571d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f27572e;

    /* renamed from: f  reason: collision with root package name */
    private final b f27573f;

    /* renamed from: g  reason: collision with root package name */
    private final lo.a f27574g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f27575h;

    /* renamed from: i  reason: collision with root package name */
    private int f27576i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, lo.a aVar, dr.a aVar2, boolean z10);
    }

    public g(Context context, ko.a cameraStatsManager, gq.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, lo.a videoCaptureMethod, dr.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f27568a = context;
        this.f27569b = cameraStatsManager;
        this.f27570c = sdkFilesManager;
        this.f27571d = cameraChoices;
        this.f27572e = previewView;
        this.f27573f = analyzer;
        this.f27574g = videoCaptureMethod;
        this.f27575h = z10;
    }

    public final e a() {
        return new e(this.f27568a, (l) this.f27571d.a().get(this.f27576i), this.f27572e, this.f27573f, this.f27574g, null, this.f27575h, this.f27569b, this.f27570c);
    }

    public final boolean b() {
        if (this.f27576i + 1 >= this.f27571d.a().size()) {
            return false;
        }
        this.f27576i++;
        return true;
    }
}
