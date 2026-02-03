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
    private final c f49151a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f49154a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f49155b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f49156c;

        /* renamed from: d  reason: collision with root package name */
        private final int f49157d;

        /* renamed from: e  reason: collision with root package name */
        private i f49158e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f49159f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f49157d = i10;
            this.f49154a = Collections.unmodifiableList(new ArrayList(list));
            this.f49155b = stateCallback;
            this.f49156c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49156c;
        }

        @Override // s.p.c
        public i b() {
            return this.f49158e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49155b;
        }

        @Override // s.p.c
        public List d() {
            return this.f49154a;
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
                if (Objects.equals(this.f49158e, bVar.f49158e) && this.f49157d == bVar.f49157d && this.f49154a.size() == bVar.f49154a.size()) {
                    for (int i10 = 0; i10 < this.f49154a.size(); i10++) {
                        if (!((j) this.f49154a.get(i10)).equals(bVar.f49154a.get(i10))) {
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
            if (this.f49157d != 1) {
                this.f49158e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f49157d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49159f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f49154a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f49158e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f49157d ^ ((i11 << 5) - i11);
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
            this.f49151a = new b(i10, list, executor, stateCallback);
        } else {
            this.f49151a = new a(i10, list, executor, stateCallback);
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
        return this.f49151a.a();
    }

    public i b() {
        return this.f49151a.b();
    }

    public List c() {
        return this.f49151a.d();
    }

    public int d() {
        return this.f49151a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f49151a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f49151a.equals(((p) obj).f49151a);
    }

    public void f(i iVar) {
        this.f49151a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f49151a.h(captureRequest);
    }

    public int hashCode() {
        return this.f49151a.hashCode();
    }

    public Object j() {
        return this.f49151a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f49152a;

        /* renamed from: b  reason: collision with root package name */
        private final List f49153b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f49152a = sessionConfiguration;
            this.f49153b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49152a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f49152a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49152a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f49153b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f49152a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f49152a, ((a) obj).f49152a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f49152a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f49152a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49152a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f49152a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
