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
    private final c f49632a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f49635a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f49636b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f49637c;

        /* renamed from: d  reason: collision with root package name */
        private final int f49638d;

        /* renamed from: e  reason: collision with root package name */
        private i f49639e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f49640f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f49638d = i10;
            this.f49635a = Collections.unmodifiableList(new ArrayList(list));
            this.f49636b = stateCallback;
            this.f49637c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49637c;
        }

        @Override // s.p.c
        public i b() {
            return this.f49639e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49636b;
        }

        @Override // s.p.c
        public List d() {
            return this.f49635a;
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
                if (Objects.equals(this.f49639e, bVar.f49639e) && this.f49638d == bVar.f49638d && this.f49635a.size() == bVar.f49635a.size()) {
                    for (int i10 = 0; i10 < this.f49635a.size(); i10++) {
                        if (!((j) this.f49635a.get(i10)).equals(bVar.f49635a.get(i10))) {
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
            if (this.f49638d != 1) {
                this.f49639e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f49638d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49640f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f49635a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f49639e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f49638d ^ ((i11 << 5) - i11);
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
            this.f49632a = new b(i10, list, executor, stateCallback);
        } else {
            this.f49632a = new a(i10, list, executor, stateCallback);
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
        return this.f49632a.a();
    }

    public i b() {
        return this.f49632a.b();
    }

    public List c() {
        return this.f49632a.d();
    }

    public int d() {
        return this.f49632a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f49632a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f49632a.equals(((p) obj).f49632a);
    }

    public void f(i iVar) {
        this.f49632a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f49632a.h(captureRequest);
    }

    public int hashCode() {
        return this.f49632a.hashCode();
    }

    public Object j() {
        return this.f49632a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f49633a;

        /* renamed from: b  reason: collision with root package name */
        private final List f49634b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f49633a = sessionConfiguration;
            this.f49634b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f49633a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f49633a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f49633a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f49634b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f49633a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f49633a, ((a) obj).f49633a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f49633a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f49633a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f49633a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f49633a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
