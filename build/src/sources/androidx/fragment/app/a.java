package androidx.fragment.app;

import android.util.Log;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.PrintWriter;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends FragmentTransaction implements FragmentManager.p {

    /* renamed from: t  reason: collision with root package name */
    final FragmentManager f4329t;

    /* renamed from: u  reason: collision with root package name */
    boolean f4330u;

    /* renamed from: v  reason: collision with root package name */
    int f4331v;

    /* renamed from: w  reason: collision with root package name */
    boolean f4332w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public a(androidx.fragment.app.FragmentManager r3) {
        /*
            r2 = this;
            androidx.fragment.app.u r0 = r3.A0()
            androidx.fragment.app.FragmentHostCallback r1 = r3.C0()
            if (r1 == 0) goto L17
            androidx.fragment.app.FragmentHostCallback r1 = r3.C0()
            android.content.Context r1 = r1.g()
            java.lang.ClassLoader r1 = r1.getClassLoader()
            goto L18
        L17:
            r1 = 0
        L18:
            r2.<init>(r0, r1)
            r0 = -1
            r2.f4331v = r0
            r0 = 0
            r2.f4332w = r0
            r2.f4329t = r3
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.fragment.app.a.<init>(androidx.fragment.app.FragmentManager):void");
    }

    public void A(String str, PrintWriter printWriter, boolean z10) {
        String str2;
        if (z10) {
            printWriter.print(str);
            printWriter.print("mName=");
            printWriter.print(this.f4305k);
            printWriter.print(" mIndex=");
            printWriter.print(this.f4331v);
            printWriter.print(" mCommitted=");
            printWriter.println(this.f4330u);
            if (this.f4302h != 0) {
                printWriter.print(str);
                printWriter.print("mTransition=#");
                printWriter.print(Integer.toHexString(this.f4302h));
            }
            if (this.f4298d != 0 || this.f4299e != 0) {
                printWriter.print(str);
                printWriter.print("mEnterAnim=#");
                printWriter.print(Integer.toHexString(this.f4298d));
                printWriter.print(" mExitAnim=#");
                printWriter.println(Integer.toHexString(this.f4299e));
            }
            if (this.f4300f != 0 || this.f4301g != 0) {
                printWriter.print(str);
                printWriter.print("mPopEnterAnim=#");
                printWriter.print(Integer.toHexString(this.f4300f));
                printWriter.print(" mPopExitAnim=#");
                printWriter.println(Integer.toHexString(this.f4301g));
            }
            if (this.f4306l != 0 || this.f4307m != null) {
                printWriter.print(str);
                printWriter.print("mBreadCrumbTitleRes=#");
                printWriter.print(Integer.toHexString(this.f4306l));
                printWriter.print(" mBreadCrumbTitleText=");
                printWriter.println(this.f4307m);
            }
            if (this.f4308n != 0 || this.f4309o != null) {
                printWriter.print(str);
                printWriter.print("mBreadCrumbShortTitleRes=#");
                printWriter.print(Integer.toHexString(this.f4308n));
                printWriter.print(" mBreadCrumbShortTitleText=");
                printWriter.println(this.f4309o);
            }
        }
        if (!this.f4297c.isEmpty()) {
            printWriter.print(str);
            printWriter.println("Operations:");
            int size = this.f4297c.size();
            for (int i10 = 0; i10 < size; i10++) {
                FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4297c.get(i10);
                switch (aVar.f4314a) {
                    case 0:
                        str2 = "NULL";
                        break;
                    case 1:
                        str2 = "ADD";
                        break;
                    case 2:
                        str2 = "REPLACE";
                        break;
                    case 3:
                        str2 = "REMOVE";
                        break;
                    case 4:
                        str2 = "HIDE";
                        break;
                    case 5:
                        str2 = "SHOW";
                        break;
                    case 6:
                        str2 = "DETACH";
                        break;
                    case 7:
                        str2 = "ATTACH";
                        break;
                    case 8:
                        str2 = "SET_PRIMARY_NAV";
                        break;
                    case 9:
                        str2 = "UNSET_PRIMARY_NAV";
                        break;
                    case 10:
                        str2 = "OP_SET_MAX_LIFECYCLE";
                        break;
                    default:
                        str2 = "cmd=" + aVar.f4314a;
                        break;
                }
                printWriter.print(str);
                printWriter.print("  Op #");
                printWriter.print(i10);
                printWriter.print(": ");
                printWriter.print(str2);
                printWriter.print(" ");
                printWriter.println(aVar.f4315b);
                if (z10) {
                    if (aVar.f4317d != 0 || aVar.f4318e != 0) {
                        printWriter.print(str);
                        printWriter.print("enterAnim=#");
                        printWriter.print(Integer.toHexString(aVar.f4317d));
                        printWriter.print(" exitAnim=#");
                        printWriter.println(Integer.toHexString(aVar.f4318e));
                    }
                    if (aVar.f4319f != 0 || aVar.f4320g != 0) {
                        printWriter.print(str);
                        printWriter.print("popEnterAnim=#");
                        printWriter.print(Integer.toHexString(aVar.f4319f));
                        printWriter.print(" popExitAnim=#");
                        printWriter.println(Integer.toHexString(aVar.f4320g));
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B() {
        int size = this.f4297c.size();
        for (int i10 = 0; i10 < size; i10++) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4297c.get(i10);
            Fragment fragment = aVar.f4315b;
            if (fragment != null) {
                fragment.mBeingSaved = this.f4332w;
                fragment.setPopDirection(false);
                fragment.setNextTransition(this.f4302h);
                fragment.setSharedElementNames(this.f4310p, this.f4311q);
            }
            switch (aVar.f4314a) {
                case 1:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.x1(fragment, false);
                    this.f4329t.l(fragment);
                    break;
                case 2:
                default:
                    throw new IllegalArgumentException("Unknown cmd: " + aVar.f4314a);
                case 3:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.o1(fragment);
                    break;
                case 4:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.M0(fragment);
                    break;
                case 5:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.x1(fragment, false);
                    this.f4329t.D1(fragment);
                    break;
                case 6:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.C(fragment);
                    break;
                case 7:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.x1(fragment, false);
                    this.f4329t.r(fragment);
                    break;
                case 8:
                    this.f4329t.B1(fragment);
                    break;
                case 9:
                    this.f4329t.B1(null);
                    break;
                case 10:
                    this.f4329t.A1(fragment, aVar.f4322i);
                    break;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C() {
        for (int size = this.f4297c.size() - 1; size >= 0; size--) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4297c.get(size);
            Fragment fragment = aVar.f4315b;
            if (fragment != null) {
                fragment.mBeingSaved = this.f4332w;
                fragment.setPopDirection(true);
                fragment.setNextTransition(FragmentManager.u1(this.f4302h));
                fragment.setSharedElementNames(this.f4311q, this.f4310p);
            }
            switch (aVar.f4314a) {
                case 1:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.x1(fragment, true);
                    this.f4329t.o1(fragment);
                    break;
                case 2:
                default:
                    throw new IllegalArgumentException("Unknown cmd: " + aVar.f4314a);
                case 3:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.l(fragment);
                    break;
                case 4:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.D1(fragment);
                    break;
                case 5:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.x1(fragment, true);
                    this.f4329t.M0(fragment);
                    break;
                case 6:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.r(fragment);
                    break;
                case 7:
                    fragment.setAnimations(aVar.f4317d, aVar.f4318e, aVar.f4319f, aVar.f4320g);
                    this.f4329t.x1(fragment, true);
                    this.f4329t.C(fragment);
                    break;
                case 8:
                    this.f4329t.B1(null);
                    break;
                case 9:
                    this.f4329t.B1(fragment);
                    break;
                case 10:
                    this.f4329t.A1(fragment, aVar.f4321h);
                    break;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment D(ArrayList arrayList, Fragment fragment) {
        Fragment fragment2 = fragment;
        int i10 = 0;
        while (i10 < this.f4297c.size()) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4297c.get(i10);
            int i11 = aVar.f4314a;
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3 && i11 != 6) {
                        if (i11 != 7) {
                            if (i11 == 8) {
                                this.f4297c.add(i10, new FragmentTransaction.a(9, fragment2, true));
                                aVar.f4316c = true;
                                i10++;
                                fragment2 = aVar.f4315b;
                            }
                        }
                    } else {
                        arrayList.remove(aVar.f4315b);
                        Fragment fragment3 = aVar.f4315b;
                        if (fragment3 == fragment2) {
                            this.f4297c.add(i10, new FragmentTransaction.a(9, fragment3));
                            i10++;
                            fragment2 = null;
                        }
                    }
                } else {
                    Fragment fragment4 = aVar.f4315b;
                    int i12 = fragment4.mContainerId;
                    boolean z10 = false;
                    for (int size = arrayList.size() - 1; size >= 0; size--) {
                        Fragment fragment5 = (Fragment) arrayList.get(size);
                        if (fragment5.mContainerId == i12) {
                            if (fragment5 == fragment4) {
                                z10 = true;
                            } else {
                                if (fragment5 == fragment2) {
                                    this.f4297c.add(i10, new FragmentTransaction.a(9, fragment5, true));
                                    i10++;
                                    fragment2 = null;
                                }
                                FragmentTransaction.a aVar2 = new FragmentTransaction.a(3, fragment5, true);
                                aVar2.f4317d = aVar.f4317d;
                                aVar2.f4319f = aVar.f4319f;
                                aVar2.f4318e = aVar.f4318e;
                                aVar2.f4320g = aVar.f4320g;
                                this.f4297c.add(i10, aVar2);
                                arrayList.remove(fragment5);
                                i10++;
                            }
                        }
                    }
                    if (z10) {
                        this.f4297c.remove(i10);
                        i10--;
                    } else {
                        aVar.f4314a = 1;
                        aVar.f4316c = true;
                        arrayList.add(fragment4);
                    }
                }
                i10++;
            }
            arrayList.add(aVar.f4315b);
            i10++;
        }
        return fragment2;
    }

    public String E() {
        return this.f4305k;
    }

    public void F() {
        if (this.f4313s != null) {
            for (int i10 = 0; i10 < this.f4313s.size(); i10++) {
                ((Runnable) this.f4313s.get(i10)).run();
            }
            this.f4313s = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment G(ArrayList arrayList, Fragment fragment) {
        for (int size = this.f4297c.size() - 1; size >= 0; size--) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4297c.get(size);
            int i10 = aVar.f4314a;
            if (i10 != 1) {
                if (i10 != 3) {
                    switch (i10) {
                        case 8:
                            fragment = null;
                            break;
                        case 9:
                            fragment = aVar.f4315b;
                            break;
                        case 10:
                            aVar.f4322i = aVar.f4321h;
                            break;
                    }
                }
                arrayList.add(aVar.f4315b);
            }
            arrayList.remove(aVar.f4315b);
        }
        return fragment;
    }

    @Override // androidx.fragment.app.FragmentManager.p
    public boolean a(ArrayList arrayList, ArrayList arrayList2) {
        if (FragmentManager.P0(2)) {
            Log.v("FragmentManager", "Run: " + this);
        }
        arrayList.add(this);
        arrayList2.add(Boolean.FALSE);
        if (this.f4303i) {
            this.f4329t.k(this);
            return true;
        }
        return true;
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public int h() {
        return y(false, true);
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public int i() {
        return y(true, true);
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public void j() {
        l();
        this.f4329t.h0(this, false);
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public void k() {
        l();
        this.f4329t.h0(this, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.fragment.app.FragmentTransaction
    public void m(int i10, Fragment fragment, String str, int i11) {
        super.m(i10, fragment, str, i11);
        fragment.mFragmentManager = this.f4329t;
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public FragmentTransaction n(Fragment fragment) {
        FragmentManager fragmentManager = fragment.mFragmentManager;
        if (fragmentManager != null && fragmentManager != this.f4329t) {
            throw new IllegalStateException("Cannot remove Fragment attached to a different FragmentManager. Fragment " + fragment.toString() + " is already attached to a FragmentManager.");
        }
        return super.n(fragment);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("BackStackEntry{");
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        if (this.f4331v >= 0) {
            sb2.append(" #");
            sb2.append(this.f4331v);
        }
        if (this.f4305k != null) {
            sb2.append(" ");
            sb2.append(this.f4305k);
        }
        sb2.append("}");
        return sb2.toString();
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public FragmentTransaction u(Fragment fragment) {
        FragmentManager fragmentManager;
        if (fragment != null && (fragmentManager = fragment.mFragmentManager) != null && fragmentManager != this.f4329t) {
            throw new IllegalStateException("Cannot setPrimaryNavigation for Fragment attached to a different FragmentManager. Fragment " + fragment.toString() + " is already attached to a FragmentManager.");
        }
        return super.u(fragment);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(int i10) {
        FragmentTransaction.a aVar;
        if (this.f4303i) {
            if (FragmentManager.P0(2)) {
                Log.v("FragmentManager", "Bump nesting in " + this + " by " + i10);
            }
            int size = this.f4297c.size();
            for (int i11 = 0; i11 < size; i11++) {
                Fragment fragment = ((FragmentTransaction.a) this.f4297c.get(i11)).f4315b;
                if (fragment != null) {
                    fragment.mBackStackNesting += i10;
                    if (FragmentManager.P0(2)) {
                        Log.v("FragmentManager", "Bump nesting of " + aVar.f4315b + " to " + aVar.f4315b.mBackStackNesting);
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x() {
        int size = this.f4297c.size() - 1;
        while (size >= 0) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4297c.get(size);
            if (aVar.f4316c) {
                if (aVar.f4314a == 8) {
                    aVar.f4316c = false;
                    this.f4297c.remove(size - 1);
                    size--;
                } else {
                    int i10 = aVar.f4315b.mContainerId;
                    aVar.f4314a = 2;
                    aVar.f4316c = false;
                    for (int i11 = size - 1; i11 >= 0; i11--) {
                        FragmentTransaction.a aVar2 = (FragmentTransaction.a) this.f4297c.get(i11);
                        if (aVar2.f4316c && aVar2.f4315b.mContainerId == i10) {
                            this.f4297c.remove(i11);
                            size--;
                        }
                    }
                }
            }
            size--;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int y(boolean z10, boolean z11) {
        if (!this.f4330u) {
            if (FragmentManager.P0(2)) {
                Log.v("FragmentManager", "Commit: " + this);
                PrintWriter printWriter = new PrintWriter(new q0("FragmentManager"));
                z("  ", printWriter);
                printWriter.close();
            }
            this.f4330u = true;
            if (this.f4303i) {
                this.f4331v = this.f4329t.p();
            } else {
                this.f4331v = -1;
            }
            if (z11) {
                this.f4329t.e0(this, z10);
            }
            return this.f4331v;
        }
        throw new IllegalStateException("commit already called");
    }

    public void z(String str, PrintWriter printWriter) {
        A(str, printWriter, true);
    }
}
