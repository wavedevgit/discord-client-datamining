package com.swmansion.gesturehandler.react;

import android.util.SparseArray;
import android.view.View;
import com.facebook.react.bridge.UiThreadUtil;
import java.util.ArrayList;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements in.j {

    /* renamed from: a  reason: collision with root package name */
    private final SparseArray f18114a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f18115b = new SparseArray();

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f18116c = new SparseArray();

    private final synchronized void d(final in.d dVar) {
        try {
            Integer num = (Integer) this.f18115b.get(dVar.T());
            if (num != null) {
                this.f18115b.remove(dVar.T());
                ArrayList arrayList = (ArrayList) this.f18116c.get(num.intValue());
                if (arrayList != null) {
                    synchronized (arrayList) {
                        arrayList.remove(dVar);
                    }
                    if (arrayList.size() == 0) {
                        this.f18116c.remove(num.intValue());
                    }
                }
            }
            if (dVar.W() != null) {
                UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.gesturehandler.react.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.e(in.d.this);
                    }
                });
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(in.d dVar) {
        dVar.q();
    }

    private final synchronized void k(int i10, in.d dVar) {
        try {
            if (this.f18115b.get(dVar.T()) == null) {
                this.f18115b.put(dVar.T(), Integer.valueOf(i10));
                Object obj = this.f18116c.get(i10);
                if (obj == null) {
                    ArrayList arrayList = new ArrayList(1);
                    arrayList.add(dVar);
                    this.f18116c.put(i10, arrayList);
                } else {
                    synchronized (obj) {
                        ((ArrayList) obj).add(dVar);
                    }
                }
            } else {
                throw new IllegalStateException(("Handler " + dVar + " already attached").toString());
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // in.j
    public synchronized ArrayList a(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return i(view.getId());
    }

    public final synchronized boolean c(int i10, int i11, int i12) {
        boolean z10;
        in.d dVar = (in.d) this.f18114a.get(i10);
        if (dVar != null) {
            d(dVar);
            dVar.u0(i12);
            k(i11, dVar);
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    public final synchronized void f() {
        this.f18114a.clear();
        this.f18115b.clear();
        this.f18116c.clear();
    }

    public final synchronized void g(int i10) {
        in.d dVar = (in.d) this.f18114a.get(i10);
        if (dVar != null) {
            d(dVar);
            this.f18114a.remove(i10);
        }
    }

    public final synchronized in.d h(int i10) {
        return (in.d) this.f18114a.get(i10);
    }

    public final synchronized ArrayList i(int i10) {
        return (ArrayList) this.f18116c.get(i10);
    }

    public final synchronized void j(in.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f18114a.put(handler.T(), handler);
    }
}
