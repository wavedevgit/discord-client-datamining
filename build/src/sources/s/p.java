package s;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.params.InputConfiguration;
import android.hardware.camera2.params.OutputConfiguration;
import android.hardware.camera2.params.SessionConfiguration;
import android.os.Build;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final c f49483a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f49486a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f49487b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f49488c;

        /* renamed from: d  reason: collision with root package name */
        private final int f49489d;

        /* renamed from: e  reason: collision with root package name */
        private i f49490e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f49491f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f49489d = i10;
            this.f49486a = Collections.unmodifiableList(new ArrayList(list));
            this.f49487b = stateCallback;
            this.f49488c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49488c;
        }

        @Override // s.p.c
        public i b() {
            return this.f49490e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49487b;
        }

        @Override // s.p.c
        public List d() {
            return this.f49486a;
        }

        @Override // s.p.c
        public Object e() {
            return null;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                if (Objects.equals(this.f49490e, bVar.f49490e) && this.f49489d == bVar.f49489d && this.f49486a.size() == bVar.f49486a.size()) {
                    for (int i10 = 0; i10 < this.f49486a.size(); i10++) {
                        if (!((j) this.f49486a.get(i10)).equals(bVar.f49486a.get(i10))) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // s.p.c
        public void f(i iVar) {
            if (this.f49489d != 1) {
                this.f49490e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f49489d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49491f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f49486a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f49490e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f49489d ^ ((i11 << 5) - i11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private interface c {
        Executor a();

        i b();

        CameraCaptureSession.StateCallback c();

        List d();

        Object e();

        void f(i iVar);

        int g();

        void h(CaptureRequest captureRequest);
    }

    public p(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
        if (Build.VERSION.SDK_INT < 28) {
            this.f49483a = new b(i10, list, executor, stateCallback);
        } else {
            this.f49483a = new a(i10, list, executor, stateCallback);
        }
    }

    public static List h(List list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add((OutputConfiguration) ((j) it.next()).i());
        }
        return arrayList;
    }

    static List i(List list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(j.j((OutputConfiguration) it.next()));
        }
        return arrayList;
    }

    public Executor a() {
        return this.f49483a.a();
    }

    public i b() {
        return this.f49483a.b();
    }

    public List c() {
        return this.f49483a.d();
    }

    public int d() {
        return this.f49483a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f49483a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f49483a.equals(((p) obj).f49483a);
    }

    public void f(i iVar) {
        this.f49483a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f49483a.h(captureRequest);
    }

    public int hashCode() {
        return this.f49483a.hashCode();
    }

    public Object j() {
        return this.f49483a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f49484a;

        /* renamed from: b  reason: collision with root package name */
        private final List f49485b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f49484a = sessionConfiguration;
            this.f49485b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49484a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f49484a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49484a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f49485b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f49484a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f49484a, ((a) obj).f49484a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f49484a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f49484a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49484a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f49484a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
