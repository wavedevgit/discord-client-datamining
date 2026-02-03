package com.swmansion.gesturehandler.react;

import android.util.SparseArray;
import android.view.View;
import com.facebook.react.bridge.UiThreadUtil;
import java.util.ArrayList;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements fn.j {

    /* renamed from: a  reason: collision with root package name */
    private final SparseArray f17708a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f17709b = new SparseArray();

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f17710c = new SparseArray();

    private final synchronized void d(final fn.d dVar) {
        try {
            Integer num = (Integer) this.f17709b.get(dVar.T());
            if (num != null) {
                this.f17709b.remove(dVar.T());
                ArrayList arrayList = (ArrayList) this.f17710c.get(num.intValue());
                if (arrayList != null) {
                    synchronized (arrayList) {
                        arrayList.remove(dVar);
                    }
                    if (arrayList.size() == 0) {
                        this.f17710c.remove(num.intValue());
                    }
                }
            }
            if (dVar.W() != null) {
                UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.gesturehandler.react.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.e(fn.d.this);
                    }
                });
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(fn.d dVar) {
        dVar.q();
    }

    private final synchronized void k(int i10, fn.d dVar) {
        try {
            if (this.f17709b.get(dVar.T()) == null) {
                this.f17709b.put(dVar.T(), Integer.valueOf(i10));
                Object obj = this.f17710c.get(i10);
                if (obj == null) {
                    ArrayList arrayList = new ArrayList(1);
                    arrayList.add(dVar);
                    this.f17710c.put(i10, arrayList);
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

    @Override // fn.j
    public synchronized ArrayList a(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return i(view.getId());
    }

    public final synchronized boolean c(int i10, int i11, int i12) {
        boolean z10;
        fn.d dVar = (fn.d) this.f17708a.get(i10);
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
        this.f17708a.clear();
        this.f17709b.clear();
        this.f17710c.clear();
    }

    public final synchronized void g(int i10) {
        fn.d dVar = (fn.d) this.f17708a.get(i10);
        if (dVar != null) {
            d(dVar);
            this.f17708a.remove(i10);
        }
    }

    public final synchronized fn.d h(int i10) {
        return (fn.d) this.f17708a.get(i10);
    }

    public final synchronized ArrayList i(int i10) {
        return (ArrayList) this.f17710c.get(i10);
    }

    public final synchronized void j(fn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f17708a.put(handler.T(), handler);
    }
}
