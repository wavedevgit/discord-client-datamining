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
    private final c f49297a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f49300a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f49301b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f49302c;

        /* renamed from: d  reason: collision with root package name */
        private final int f49303d;

        /* renamed from: e  reason: collision with root package name */
        private i f49304e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f49305f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f49303d = i10;
            this.f49300a = Collections.unmodifiableList(new ArrayList(list));
            this.f49301b = stateCallback;
            this.f49302c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49302c;
        }

        @Override // s.p.c
        public i b() {
            return this.f49304e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49301b;
        }

        @Override // s.p.c
        public List d() {
            return this.f49300a;
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
                if (Objects.equals(this.f49304e, bVar.f49304e) && this.f49303d == bVar.f49303d && this.f49300a.size() == bVar.f49300a.size()) {
                    for (int i10 = 0; i10 < this.f49300a.size(); i10++) {
                        if (!((j) this.f49300a.get(i10)).equals(bVar.f49300a.get(i10))) {
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
            if (this.f49303d != 1) {
                this.f49304e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f49303d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49305f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f49300a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f49304e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f49303d ^ ((i11 << 5) - i11);
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
            this.f49297a = new b(i10, list, executor, stateCallback);
        } else {
            this.f49297a = new a(i10, list, executor, stateCallback);
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
        return this.f49297a.a();
    }

    public i b() {
        return this.f49297a.b();
    }

    public List c() {
        return this.f49297a.d();
    }

    public int d() {
        return this.f49297a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f49297a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f49297a.equals(((p) obj).f49297a);
    }

    public void f(i iVar) {
        this.f49297a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f49297a.h(captureRequest);
    }

    public int hashCode() {
        return this.f49297a.hashCode();
    }

    public Object j() {
        return this.f49297a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f49298a;

        /* renamed from: b  reason: collision with root package name */
        private final List f49299b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f49298a = sessionConfiguration;
            this.f49299b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49298a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f49298a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49298a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f49299b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f49298a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f49298a, ((a) obj).f49298a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f49298a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f49298a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49298a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f49298a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
