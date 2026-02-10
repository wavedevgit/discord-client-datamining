package ho;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27567a;

    /* renamed from: b  reason: collision with root package name */
    private final ko.a f27568b;

    /* renamed from: c  reason: collision with root package name */
    private final gq.c f27569c;

    /* renamed from: d  reason: collision with root package name */
    private final m f27570d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f27571e;

    /* renamed from: f  reason: collision with root package name */
    private final b f27572f;

    /* renamed from: g  reason: collision with root package name */
    private final lo.a f27573g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f27574h;

    /* renamed from: i  reason: collision with root package name */
    private int f27575i;

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
        this.f27567a = context;
        this.f27568b = cameraStatsManager;
        this.f27569c = sdkFilesManager;
        this.f27570d = cameraChoices;
        this.f27571e = previewView;
        this.f27572f = analyzer;
        this.f27573g = videoCaptureMethod;
        this.f27574h = z10;
    }

    public final e a() {
        return new e(this.f27567a, (l) this.f27570d.a().get(this.f27575i), this.f27571e, this.f27572f, this.f27573g, null, this.f27574h, this.f27568b, this.f27569c);
    }

    public final boolean b() {
        if (this.f27575i + 1 >= this.f27570d.a().size()) {
            return false;
        }
        this.f27575i++;
        return true;
    }
}
