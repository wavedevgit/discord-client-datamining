package gf;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.lang.ref.WeakReference;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j1 extends Fragment implements h {

    /* renamed from: e  reason: collision with root package name */
    private static final WeakHashMap f25638e = new WeakHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final i1 f25639d = new i1();

    public static j1 x(FragmentActivity fragmentActivity) {
        j1 j1Var;
        FragmentManager supportFragmentManager = fragmentActivity.getSupportFragmentManager();
        WeakHashMap weakHashMap = f25638e;
        WeakReference weakReference = (WeakReference) weakHashMap.get(fragmentActivity);
        if (weakReference != null && (j1Var = (j1) weakReference.get()) != null) {
            return j1Var;
        }
        try {
            j1 j1Var2 = (j1) supportFragmentManager.p0("SLifecycleFragmentImpl");
            if (j1Var2 == null || j1Var2.isRemoving()) {
                j1Var2 = new j1();
                supportFragmentManager.s().e(j1Var2, "SLifecycleFragmentImpl").i();
            }
            weakHashMap.put(fragmentActivity, new WeakReference(j1Var2));
            return j1Var2;
        } catch (ClassCastException e10) {
            throw new IllegalStateException("Fragment with tag SLifecycleFragmentImpl is not a SupportLifecycleFragmentImpl", e10);
        }
    }

    @Override // gf.h
    public final g b(String str, Class cls) {
        return this.f25639d.a(str, cls);
    }

    @Override // gf.h
    public final void d(String str, g gVar) {
        this.f25639d.b(str, gVar);
    }

    @Override // androidx.fragment.app.Fragment
    public final void dump(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        super.dump(str, fileDescriptor, printWriter, strArr);
        this.f25639d.j(str, fileDescriptor, printWriter, strArr);
    }

    @Override // gf.h
    public final Activity g() {
        return getActivity();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onActivityResult(int i10, int i11, Intent intent) {
        super.onActivityResult(i10, i11, intent);
        this.f25639d.f(i10, i11, intent);
    }

    @Override // androidx.fragment.app.Fragment
    public final void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f25639d.c(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public final void onDestroy() {
        super.onDestroy();
        this.f25639d.i();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onResume() {
        super.onResume();
        this.f25639d.e();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        this.f25639d.g(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public final void onStart() {
        super.onStart();
        this.f25639d.d();
    }

    @Override // androidx.fragment.app.Fragment
    public final void onStop() {
        super.onStop();
        this.f25639d.h();
    }
}
