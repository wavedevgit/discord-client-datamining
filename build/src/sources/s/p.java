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
    private final c f47800a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final List f47803a;

        /* renamed from: b  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f47804b;

        /* renamed from: c  reason: collision with root package name */
        private final Executor f47805c;

        /* renamed from: d  reason: collision with root package name */
        private final int f47806d;

        /* renamed from: e  reason: collision with root package name */
        private i f47807e = null;

        /* renamed from: f  reason: collision with root package name */
        private CaptureRequest f47808f = null;

        b(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f47806d = i10;
            this.f47803a = Collections.unmodifiableList(new ArrayList(list));
            this.f47804b = stateCallback;
            this.f47805c = executor;
        }

        @Override // s.p.c
        public Executor a() {
            return this.f47805c;
        }

        @Override // s.p.c
        public i b() {
            return this.f47807e;
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f47804b;
        }

        @Override // s.p.c
        public List d() {
            return this.f47803a;
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
                if (Objects.equals(this.f47807e, bVar.f47807e) && this.f47806d == bVar.f47806d && this.f47803a.size() == bVar.f47803a.size()) {
                    for (int i10 = 0; i10 < this.f47803a.size(); i10++) {
                        if (!((j) this.f47803a.get(i10)).equals(bVar.f47803a.get(i10))) {
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
            if (this.f47806d != 1) {
                this.f47807e = iVar;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // s.p.c
        public int g() {
            return this.f47806d;
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f47808f = captureRequest;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f47803a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            i iVar = this.f47807e;
            if (iVar == null) {
                hashCode = 0;
            } else {
                hashCode = iVar.hashCode();
            }
            int i11 = hashCode ^ i10;
            return this.f47806d ^ ((i11 << 5) - i11);
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
            this.f47800a = new b(i10, list, executor, stateCallback);
        } else {
            this.f47800a = new a(i10, list, executor, stateCallback);
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
        return this.f47800a.a();
    }

    public i b() {
        return this.f47800a.b();
    }

    public List c() {
        return this.f47800a.d();
    }

    public int d() {
        return this.f47800a.g();
    }

    public CameraCaptureSession.StateCallback e() {
        return this.f47800a.c();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p)) {
            return false;
        }
        return this.f47800a.equals(((p) obj).f47800a);
    }

    public void f(i iVar) {
        this.f47800a.f(iVar);
    }

    public void g(CaptureRequest captureRequest) {
        this.f47800a.h(captureRequest);
    }

    public int hashCode() {
        return this.f47800a.hashCode();
    }

    public Object j() {
        return this.f47800a.e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final SessionConfiguration f47801a;

        /* renamed from: b  reason: collision with root package name */
        private final List f47802b;

        a(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.f47801a = sessionConfiguration;
            this.f47802b = Collections.unmodifiableList(p.i(sessionConfiguration.getOutputConfigurations()));
        }

        @Override // s.p.c
        public Executor a() {
            return this.f47801a.getExecutor();
        }

        @Override // s.p.c
        public i b() {
            return i.b(this.f47801a.getInputConfiguration());
        }

        @Override // s.p.c
        public CameraCaptureSession.StateCallback c() {
            return this.f47801a.getStateCallback();
        }

        @Override // s.p.c
        public List d() {
            return this.f47802b;
        }

        @Override // s.p.c
        public Object e() {
            return this.f47801a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            return Objects.equals(this.f47801a, ((a) obj).f47801a);
        }

        @Override // s.p.c
        public void f(i iVar) {
            this.f47801a.setInputConfiguration((InputConfiguration) iVar.a());
        }

        @Override // s.p.c
        public int g() {
            return this.f47801a.getSessionType();
        }

        @Override // s.p.c
        public void h(CaptureRequest captureRequest) {
            this.f47801a.setSessionParameters(captureRequest);
        }

        public int hashCode() {
            return this.f47801a.hashCode();
        }

        a(int i10, List list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i10, p.h(list), executor, stateCallback));
        }
    }
}
