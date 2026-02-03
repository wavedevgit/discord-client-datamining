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
    private final c f48741a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f48744a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f48745b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f48746c;

        /* renamed from: d  reason: collision with root package name */
        private final int f48747d;

        /* renamed from: e  reason: collision with root package name */
        private i f48748e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f48749f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f48747d = i10;
            this.f48744a = Collections.unmodifiableList(new ArrayList(list));
            this.f48745b = stateCallback;
            this.f48746c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48746c;
        }

        @Override // s.p.c
        public i b() {
            return this.f48748e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48745b;
        }

        @Override // s.p.c
        public List d() {
            return this.f48744a;
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
                if (Objects.equals(this.f48748e, bVar.f48748e) && this.f48747d == bVar.f48747d && this.f48744a.size() == bVar.f48744a.size()) {
                    for (int i10 = 0; i10 < this.f48744a.size(); i10++) {
                        if (!((j) this.f48744a.get(i10)).equals(bVar.f48744a.get(i10))) {
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
            if (this.f48747d != 1) {
                this.f48748e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f48747d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48749f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f48744a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f48748e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f48747d ^ ((i11 << 5) - i11);
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
            this.f48741a = new b(i10, list, executor, stateCallback);
        } else {
            this.f48741a = new a(i10, list, executor, stateCallback);
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
        return this.f48741a.a();
    }

    public i b() {
        return this.f48741a.b();
    }

    public List c() {
        return this.f48741a.d();
    }

    public int d() {
        return this.f48741a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f48741a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f48741a.equals(((p) obj).f48741a);
    }

    public void f(i iVar) {
        this.f48741a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f48741a.h(captureRequest);
    }

    public int hashCode() {
        return this.f48741a.hashCode();
    }

    public Object j() {
        return this.f48741a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f48742a;

        /* renamed from: b  reason: collision with root package name */
        private final List f48743b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f48742a = sessionConfiguration;
            this.f48743b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48742a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f48742a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48742a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f48743b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f48742a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f48742a, ((a) obj).f48742a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f48742a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f48742a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48742a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f48742a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
