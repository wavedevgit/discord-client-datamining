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
    private final c f48687a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f48690a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f48691b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f48692c;

        /* renamed from: d  reason: collision with root package name */
        private final int f48693d;

        /* renamed from: e  reason: collision with root package name */
        private i f48694e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f48695f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f48693d = i10;
            this.f48690a = Collections.unmodifiableList(new ArrayList(list));
            this.f48691b = stateCallback;
            this.f48692c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48692c;
        }

        @Override // s.p.c
        public i b() {
            return this.f48694e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48691b;
        }

        @Override // s.p.c
        public List d() {
            return this.f48690a;
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
                if (Objects.equals(this.f48694e, bVar.f48694e) && this.f48693d == bVar.f48693d && this.f48690a.size() == bVar.f48690a.size()) {
                    for (int i10 = 0; i10 < this.f48690a.size(); i10++) {
                        if (!((j) this.f48690a.get(i10)).equals(bVar.f48690a.get(i10))) {
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
            if (this.f48693d != 1) {
                this.f48694e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f48693d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48695f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f48690a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f48694e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f48693d ^ ((i11 << 5) - i11);
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
            this.f48687a = new b(i10, list, executor, stateCallback);
        } else {
            this.f48687a = new a(i10, list, executor, stateCallback);
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
        return this.f48687a.a();
    }

    public i b() {
        return this.f48687a.b();
    }

    public List c() {
        return this.f48687a.d();
    }

    public int d() {
        return this.f48687a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f48687a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f48687a.equals(((p) obj).f48687a);
    }

    public void f(i iVar) {
        this.f48687a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f48687a.h(captureRequest);
    }

    public int hashCode() {
        return this.f48687a.hashCode();
    }

    public Object j() {
        return this.f48687a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f48688a;

        /* renamed from: b  reason: collision with root package name */
        private final List f48689b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f48688a = sessionConfiguration;
            this.f48689b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48688a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f48688a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48688a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f48689b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f48688a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f48688a, ((a) obj).f48688a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f48688a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f48688a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48688a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f48688a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
