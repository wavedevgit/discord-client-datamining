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
    private final c f48368a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f48371a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f48372b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f48373c;

        /* renamed from: d  reason: collision with root package name */
        private final int f48374d;

        /* renamed from: e  reason: collision with root package name */
        private i f48375e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f48376f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f48374d = i10;
            this.f48371a = Collections.unmodifiableList(new ArrayList(list));
            this.f48372b = stateCallback;
            this.f48373c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48373c;
        }

        @Override // s.p.c
        public i b() {
            return this.f48375e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48372b;
        }

        @Override // s.p.c
        public List d() {
            return this.f48371a;
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
                if (Objects.equals(this.f48375e, bVar.f48375e) && this.f48374d == bVar.f48374d && this.f48371a.size() == bVar.f48371a.size()) {
                    for (int i10 = 0; i10 < this.f48371a.size(); i10++) {
                        if (!((j) this.f48371a.get(i10)).equals(bVar.f48371a.get(i10))) {
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
            if (this.f48374d != 1) {
                this.f48375e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f48374d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48376f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f48371a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f48375e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f48374d ^ ((i11 << 5) - i11);
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
            this.f48368a = new b(i10, list, executor, stateCallback);
        } else {
            this.f48368a = new a(i10, list, executor, stateCallback);
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
        return this.f48368a.a();
    }

    public i b() {
        return this.f48368a.b();
    }

    public List c() {
        return this.f48368a.d();
    }

    public int d() {
        return this.f48368a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f48368a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f48368a.equals(((p) obj).f48368a);
    }

    public void f(i iVar) {
        this.f48368a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f48368a.h(captureRequest);
    }

    public int hashCode() {
        return this.f48368a.hashCode();
    }

    public Object j() {
        return this.f48368a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f48369a;

        /* renamed from: b  reason: collision with root package name */
        private final List f48370b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f48369a = sessionConfiguration;
            this.f48370b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f48369a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f48369a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f48369a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f48370b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f48369a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f48369a, ((a) obj).f48369a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f48369a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f48369a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f48369a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f48369a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
