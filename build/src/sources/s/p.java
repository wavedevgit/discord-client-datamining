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
    private final c f48671a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f48674a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f48675b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f48676c;

        /* renamed from: d  reason: collision with root package name */
        private final int f48677d;

        /* renamed from: e  reason: collision with root package name */
        private i f48678e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f48679f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f48677d = i10;
            this.f48674a = Collections.unmodifiableList(new ArrayList(list));
            this.f48675b = stateCallback;
            this.f48676c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48676c;
        }

        @Override // s.p.c
        public i b() {
            return this.f48678e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48675b;
        }

        @Override // s.p.c
        public List d() {
            return this.f48674a;
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
                if (Objects.equals(this.f48678e, bVar.f48678e) && this.f48677d == bVar.f48677d && this.f48674a.size() == bVar.f48674a.size()) {
                    for (int i10 = 0; i10 < this.f48674a.size(); i10++) {
                        if (!((j) this.f48674a.get(i10)).equals(bVar.f48674a.get(i10))) {
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
            if (this.f48677d != 1) {
                this.f48678e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f48677d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48679f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f48674a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f48678e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f48677d ^ ((i11 << 5) - i11);
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
            this.f48671a = new b(i10, list, executor, stateCallback);
        } else {
            this.f48671a = new a(i10, list, executor, stateCallback);
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
        return this.f48671a.a();
    }

    public i b() {
        return this.f48671a.b();
    }

    public List c() {
        return this.f48671a.d();
    }

    public int d() {
        return this.f48671a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f48671a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f48671a.equals(((p) obj).f48671a);
    }

    public void f(i iVar) {
        this.f48671a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f48671a.h(captureRequest);
    }

    public int hashCode() {
        return this.f48671a.hashCode();
    }

    public Object j() {
        return this.f48671a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f48672a;

        /* renamed from: b  reason: collision with root package name */
        private final List f48673b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f48672a = sessionConfiguration;
            this.f48673b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48672a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f48672a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48672a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f48673b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f48672a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f48672a, ((a) obj).f48672a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f48672a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f48672a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48672a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f48672a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
