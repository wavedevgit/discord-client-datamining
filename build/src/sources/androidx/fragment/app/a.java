package androidx.fragment.app;

import android.util.Log;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.PrintWriter;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends FragmentTransaction implements FragmentManager.o {

    /* renamed from: t  reason: collision with root package name */
    final FragmentManager f4181t;

    /* renamed from: u  reason: collision with root package name */
    boolean f4182u;

    /* renamed from: v  reason: collision with root package name */
    int f4183v;

    /* renamed from: w  reason: collision with root package name */
    boolean f4184w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public a(androidx.fragment.app.FragmentManager r3) {
        /*
            r2 = this;
            androidx.fragment.app.u r0 = r3.z0()
            androidx.fragment.app.FragmentHostCallback r1 = r3.B0()
            if (r1 == 0) goto L17
            androidx.fragment.app.FragmentHostCallback r1 = r3.B0()
            android.content.Context r1 = r1.f()
            java.lang.ClassLoader r1 = r1.getClassLoader()
            goto L18
        L17:
            r1 = 0
        L18:
            r2.<init>(r0, r1)
            r0 = -1
            r2.f4183v = r0
            r0 = 0
            r2.f4184w = r0
            r2.f4181t = r3
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.fragment.app.a.<init>(androidx.fragment.app.FragmentManager):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A() {
        for (int size = this.f4149c.size() - 1; size >= 0; size--) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4149c.get(size);
            Fragment fragment = aVar.f4167b;
            if (fragment != null) {
                fragment.mBeingSaved = this.f4184w;
                fragment.setPopDirection(true);
                fragment.setNextTransition(FragmentManager.r1(this.f4154h));
                fragment.setSharedElementNames(this.f4163q, this.f4162p);
            }
            switch (aVar.f4166a) {
                case 1:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.u1(fragment, true);
                    this.f4181t.m1(fragment);
                    break;
                case 2:
                default:
                    throw new IllegalArgumentException("Unknown cmd: " + aVar.f4166a);
                case 3:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.l(fragment);
                    break;
                case 4:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.A1(fragment);
                    break;
                case 5:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.u1(fragment, true);
                    this.f4181t.L0(fragment);
                    break;
                case 6:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.q(fragment);
                    break;
                case 7:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.u1(fragment, true);
                    this.f4181t.B(fragment);
                    break;
                case 8:
                    this.f4181t.y1(null);
                    break;
                case 9:
                    this.f4181t.y1(fragment);
                    break;
                case 10:
                    this.f4181t.x1(fragment, aVar.f4173h);
                    break;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment B(ArrayList arrayList, Fragment fragment) {
        Fragment fragment2 = fragment;
        int i10 = 0;
        while (i10 < this.f4149c.size()) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4149c.get(i10);
            int i11 = aVar.f4166a;
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3 && i11 != 6) {
                        if (i11 != 7) {
                            if (i11 == 8) {
                                this.f4149c.add(i10, new FragmentTransaction.a(9, fragment2, true));
                                aVar.f4168c = true;
                                i10++;
                                fragment2 = aVar.f4167b;
                            }
                        }
                    } else {
                        arrayList.remove(aVar.f4167b);
                        Fragment fragment3 = aVar.f4167b;
                        if (fragment3 == fragment2) {
                            this.f4149c.add(i10, new FragmentTransaction.a(9, fragment3));
                            i10++;
                            fragment2 = null;
                        }
                    }
                } else {
                    Fragment fragment4 = aVar.f4167b;
                    int i12 = fragment4.mContainerId;
                    boolean z10 = false;
                    for (int size = arrayList.size() - 1; size >= 0; size--) {
                        Fragment fragment5 = (Fragment) arrayList.get(size);
                        if (fragment5.mContainerId == i12) {
                            if (fragment5 == fragment4) {
                                z10 = true;
                            } else {
                                if (fragment5 == fragment2) {
                                    this.f4149c.add(i10, new FragmentTransaction.a(9, fragment5, true));
                                    i10++;
                                    fragment2 = null;
                                }
                                FragmentTransaction.a aVar2 = new FragmentTransaction.a(3, fragment5, true);
                                aVar2.f4169d = aVar.f4169d;
                                aVar2.f4171f = aVar.f4171f;
                                aVar2.f4170e = aVar.f4170e;
                                aVar2.f4172g = aVar.f4172g;
                                this.f4149c.add(i10, aVar2);
                                arrayList.remove(fragment5);
                                i10++;
                            }
                        }
                    }
                    if (z10) {
                        this.f4149c.remove(i10);
                        i10--;
                    } else {
                        aVar.f4166a = 1;
                        aVar.f4168c = true;
                        arrayList.add(fragment4);
                    }
                }
                i10++;
            }
            arrayList.add(aVar.f4167b);
            i10++;
        }
        return fragment2;
    }

    public String C() {
        return this.f4157k;
    }

    public void D() {
        if (this.f4165s != null) {
            for (int i10 = 0; i10 < this.f4165s.size(); i10++) {
                ((Runnable) this.f4165s.get(i10)).run();
            }
            this.f4165s = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment E(ArrayList arrayList, Fragment fragment) {
        for (int size = this.f4149c.size() - 1; size >= 0; size--) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4149c.get(size);
            int i10 = aVar.f4166a;
            if (i10 != 1) {
                if (i10 != 3) {
                    switch (i10) {
                        case 8:
                            fragment = null;
                            break;
                        case 9:
                            fragment = aVar.f4167b;
                            break;
                        case 10:
                            aVar.f4174i = aVar.f4173h;
                            break;
                    }
                }
                arrayList.add(aVar.f4167b);
            }
            arrayList.remove(aVar.f4167b);
        }
        return fragment;
    }

    @Override // androidx.fragment.app.FragmentManager.o
    public boolean a(ArrayList arrayList, ArrayList arrayList2) {
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "Run: " + this);
        }
        arrayList.add(this);
        arrayList2.add(Boolean.FALSE);
        if (this.f4155i) {
            this.f4181t.k(this);
            return true;
        }
        return true;
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public int g() {
        return w(false, true);
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public int h() {
        return w(true, true);
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public void i() {
        k();
        this.f4181t.g0(this, false);
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public void j() {
        k();
        this.f4181t.g0(this, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.fragment.app.FragmentTransaction
    public void l(int i10, Fragment fragment, String str, int i11) {
        super.l(i10, fragment, str, i11);
        fragment.mFragmentManager = this.f4181t;
    }

    @Override // androidx.fragment.app.FragmentTransaction
    public FragmentTransaction m(Fragment fragment) {
        FragmentManager fragmentManager = fragment.mFragmentManager;
        if (fragmentManager != null && fragmentManager != this.f4181t) {
            throw new IllegalStateException("Cannot remove Fragment attached to a different FragmentManager. Fragment " + fragment.toString() + " is already attached to a FragmentManager.");
        }
        return super.m(fragment);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("BackStackEntry{");
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        if (this.f4183v >= 0) {
            sb2.append(" #");
            sb2.append(this.f4183v);
        }
        if (this.f4157k != null) {
            sb2.append(" ");
            sb2.append(this.f4157k);
        }
        sb2.append("}");
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int i10) {
        FragmentTransaction.a aVar;
        if (this.f4155i) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Bump nesting in " + this + " by " + i10);
            }
            int size = this.f4149c.size();
            for (int i11 = 0; i11 < size; i11++) {
                Fragment fragment = ((FragmentTransaction.a) this.f4149c.get(i11)).f4167b;
                if (fragment != null) {
                    fragment.mBackStackNesting += i10;
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "Bump nesting of " + aVar.f4167b + " to " + aVar.f4167b.mBackStackNesting);
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v() {
        int size = this.f4149c.size() - 1;
        while (size >= 0) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4149c.get(size);
            if (aVar.f4168c) {
                if (aVar.f4166a == 8) {
                    aVar.f4168c = false;
                    this.f4149c.remove(size - 1);
                    size--;
                } else {
                    int i10 = aVar.f4167b.mContainerId;
                    aVar.f4166a = 2;
                    aVar.f4168c = false;
                    for (int i11 = size - 1; i11 >= 0; i11--) {
                        FragmentTransaction.a aVar2 = (FragmentTransaction.a) this.f4149c.get(i11);
                        if (aVar2.f4168c && aVar2.f4167b.mContainerId == i10) {
                            this.f4149c.remove(i11);
                            size--;
                        }
                    }
                }
            }
            size--;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int w(boolean z10, boolean z11) {
        if (!this.f4182u) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Commit: " + this);
                PrintWriter printWriter = new PrintWriter(new q0("FragmentManager"));
                x("  ", printWriter);
                printWriter.close();
            }
            this.f4182u = true;
            if (this.f4155i) {
                this.f4183v = this.f4181t.o();
            } else {
                this.f4183v = -1;
            }
            if (z11) {
                this.f4181t.d0(this, z10);
            }
            return this.f4183v;
        }
        throw new IllegalStateException("commit already called");
    }

    public void x(String str, PrintWriter printWriter) {
        y(str, printWriter, true);
    }

    public void y(String str, PrintWriter printWriter, boolean z10) {
        String str2;
        if (z10) {
            printWriter.print(str);
            printWriter.print("mName=");
            printWriter.print(this.f4157k);
            printWriter.print(" mIndex=");
            printWriter.print(this.f4183v);
            printWriter.print(" mCommitted=");
            printWriter.println(this.f4182u);
            if (this.f4154h != 0) {
                printWriter.print(str);
                printWriter.print("mTransition=#");
                printWriter.print(Integer.toHexString(this.f4154h));
            }
            if (this.f4150d != 0 || this.f4151e != 0) {
                printWriter.print(str);
                printWriter.print("mEnterAnim=#");
                printWriter.print(Integer.toHexString(this.f4150d));
                printWriter.print(" mExitAnim=#");
                printWriter.println(Integer.toHexString(this.f4151e));
            }
            if (this.f4152f != 0 || this.f4153g != 0) {
                printWriter.print(str);
                printWriter.print("mPopEnterAnim=#");
                printWriter.print(Integer.toHexString(this.f4152f));
                printWriter.print(" mPopExitAnim=#");
                printWriter.println(Integer.toHexString(this.f4153g));
            }
            if (this.f4158l != 0 || this.f4159m != null) {
                printWriter.print(str);
                printWriter.print("mBreadCrumbTitleRes=#");
                printWriter.print(Integer.toHexString(this.f4158l));
                printWriter.print(" mBreadCrumbTitleText=");
                printWriter.println(this.f4159m);
            }
            if (this.f4160n != 0 || this.f4161o != null) {
                printWriter.print(str);
                printWriter.print("mBreadCrumbShortTitleRes=#");
                printWriter.print(Integer.toHexString(this.f4160n));
                printWriter.print(" mBreadCrumbShortTitleText=");
                printWriter.println(this.f4161o);
            }
        }
        if (!this.f4149c.isEmpty()) {
            printWriter.print(str);
            printWriter.println("Operations:");
            int size = this.f4149c.size();
            for (int i10 = 0; i10 < size; i10++) {
                FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4149c.get(i10);
                switch (aVar.f4166a) {
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
                        str2 = "cmd=" + aVar.f4166a;
                        break;
                }
                printWriter.print(str);
                printWriter.print("  Op #");
                printWriter.print(i10);
                printWriter.print(": ");
                printWriter.print(str2);
                printWriter.print(" ");
                printWriter.println(aVar.f4167b);
                if (z10) {
                    if (aVar.f4169d != 0 || aVar.f4170e != 0) {
                        printWriter.print(str);
                        printWriter.print("enterAnim=#");
                        printWriter.print(Integer.toHexString(aVar.f4169d));
                        printWriter.print(" exitAnim=#");
                        printWriter.println(Integer.toHexString(aVar.f4170e));
                    }
                    if (aVar.f4171f != 0 || aVar.f4172g != 0) {
                        printWriter.print(str);
                        printWriter.print("popEnterAnim=#");
                        printWriter.print(Integer.toHexString(aVar.f4171f));
                        printWriter.print(" popExitAnim=#");
                        printWriter.println(Integer.toHexString(aVar.f4172g));
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z() {
        int size = this.f4149c.size();
        for (int i10 = 0; i10 < size; i10++) {
            FragmentTransaction.a aVar = (FragmentTransaction.a) this.f4149c.get(i10);
            Fragment fragment = aVar.f4167b;
            if (fragment != null) {
                fragment.mBeingSaved = this.f4184w;
                fragment.setPopDirection(false);
                fragment.setNextTransition(this.f4154h);
                fragment.setSharedElementNames(this.f4162p, this.f4163q);
            }
            switch (aVar.f4166a) {
                case 1:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.u1(fragment, false);
                    this.f4181t.l(fragment);
                    break;
                case 2:
                default:
                    throw new IllegalArgumentException("Unknown cmd: " + aVar.f4166a);
                case 3:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.m1(fragment);
                    break;
                case 4:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.L0(fragment);
                    break;
                case 5:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.u1(fragment, false);
                    this.f4181t.A1(fragment);
                    break;
                case 6:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.B(fragment);
                    break;
                case 7:
                    fragment.setAnimations(aVar.f4169d, aVar.f4170e, aVar.f4171f, aVar.f4172g);
                    this.f4181t.u1(fragment, false);
                    this.f4181t.q(fragment);
                    break;
                case 8:
                    this.f4181t.y1(fragment);
                    break;
                case 9:
                    this.f4181t.y1(null);
                    break;
                case 10:
                    this.f4181t.x1(fragment, aVar.f4174i);
                    break;
            }
        }
    }
}
