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
    private final c f49148a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f49151a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f49152b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f49153c;

        /* renamed from: d  reason: collision with root package name */
        private final int f49154d;

        /* renamed from: e  reason: collision with root package name */
        private i f49155e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f49156f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f49154d = i10;
            this.f49151a = Collections.unmodifiableList(new ArrayList(list));
            this.f49152b = stateCallback;
            this.f49153c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49153c;
        }

        @Override // s.p.c
        public i b() {
            return this.f49155e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49152b;
        }

        @Override // s.p.c
        public List d() {
            return this.f49151a;
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
                if (Objects.equals(this.f49155e, bVar.f49155e) && this.f49154d == bVar.f49154d && this.f49151a.size() == bVar.f49151a.size()) {
                    for (int i10 = 0; i10 < this.f49151a.size(); i10++) {
                        if (!((j) this.f49151a.get(i10)).equals(bVar.f49151a.get(i10))) {
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
            if (this.f49154d != 1) {
                this.f49155e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f49154d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49156f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f49151a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f49155e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f49154d ^ ((i11 << 5) - i11);
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
            this.f49148a = new b(i10, list, executor, stateCallback);
        } else {
            this.f49148a = new a(i10, list, executor, stateCallback);
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
        return this.f49148a.a();
    }

    public i b() {
        return this.f49148a.b();
    }

    public List c() {
        return this.f49148a.d();
    }

    public int d() {
        return this.f49148a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f49148a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f49148a.equals(((p) obj).f49148a);
    }

    public void f(i iVar) {
        this.f49148a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f49148a.h(captureRequest);
    }

    public int hashCode() {
        return this.f49148a.hashCode();
    }

    public Object j() {
        return this.f49148a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f49149a;

        /* renamed from: b  reason: collision with root package name */
        private final List f49150b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f49149a = sessionConfiguration;
            this.f49150b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49149a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f49149a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49149a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f49150b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f49149a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f49149a, ((a) obj).f49149a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f49149a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f49149a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49149a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f49149a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
