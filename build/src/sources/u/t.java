package u;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureFailure;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import android.util.Log;
import androidx.arch.core.util.Function;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import q.t0;
import u.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f49983a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49984b = Collections.synchronizedList(new ArrayList());

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends CameraCaptureSession.CaptureCallback {

        /* renamed from: a  reason: collision with root package name */
        final ListenableFuture f49985a = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: u.s
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return t.a.a(t.a.this, aVar);
            }
        });

        /* renamed from: b  reason: collision with root package name */
        c.a f49986b;

        a() {
        }

        public static /* synthetic */ Object a(a aVar, c.a aVar2) {
            aVar.f49986b = aVar2;
            return "RequestCompleteListener[" + aVar + "]";
        }

        private void b() {
            c.a aVar = this.f49986b;
            if (aVar != null) {
                aVar.c(null);
                this.f49986b = null;
            }
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureCompleted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, TotalCaptureResult totalCaptureResult) {
            b();
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureFailed(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, CaptureFailure captureFailure) {
            b();
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureSequenceAborted(CameraCaptureSession cameraCaptureSession, int i10) {
            b();
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureSequenceCompleted(CameraCaptureSession cameraCaptureSession, int i10, long j10) {
            b();
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureStarted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, long j10, long j11) {
            b();
        }
    }

    public t(boolean z10) {
        this.f49983a = z10;
    }

    public static /* synthetic */ void a(t tVar, a aVar, ListenableFuture listenableFuture) {
        tVar.getClass();
        Log.d("RequestMonitor", "RequestListener " + aVar + " done " + tVar);
        tVar.f49984b.remove(listenableFuture);
    }

    public static /* synthetic */ Void b(List list) {
        return null;
    }

    private CameraCaptureSession.CaptureCallback c() {
        final a aVar = new a();
        final ListenableFuture listenableFuture = aVar.f49985a;
        this.f49984b.add(listenableFuture);
        Log.d("RequestMonitor", "RequestListener " + aVar + " monitoring " + this);
        listenableFuture.a(new Runnable() { // from class: u.r
            @Override // java.lang.Runnable
            public final void run() {
                t.a(t.this, aVar, listenableFuture);
            }
        }, c0.a.a());
        return aVar;
    }

    public CameraCaptureSession.CaptureCallback d(CameraCaptureSession.CaptureCallback captureCallback) {
        if (f()) {
            return t0.b(c(), captureCallback);
        }
        return captureCallback;
    }

    public ListenableFuture e() {
        if (this.f49984b.isEmpty()) {
            return d0.n.p(null);
        }
        return d0.n.s(d0.n.x(d0.n.w(new ArrayList(this.f49984b)), new Function() { // from class: u.q
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                return t.b((List) obj);
            }
        }, c0.a.a()));
    }

    public boolean f() {
        return this.f49983a;
    }

    public void g() {
        LinkedList linkedList = new LinkedList(this.f49984b);
        while (!linkedList.isEmpty()) {
            ListenableFuture listenableFuture = (ListenableFuture) linkedList.poll();
            Objects.requireNonNull(listenableFuture);
            listenableFuture.cancel(true);
        }
    }
}
