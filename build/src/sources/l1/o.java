package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: g  reason: collision with root package name */
    static int f36788g;

    /* renamed from: b  reason: collision with root package name */
    int f36790b;

    /* renamed from: d  reason: collision with root package name */
    int f36792d;

    /* renamed from: a  reason: collision with root package name */
    ArrayList f36789a = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    boolean f36791c = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f36793e = null;

    /* renamed from: f  reason: collision with root package name */
    private int f36794f = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        WeakReference f36795a;

        /* renamed from: b  reason: collision with root package name */
        int f36796b;

        /* renamed from: c  reason: collision with root package name */
        int f36797c;

        /* renamed from: d  reason: collision with root package name */
        int f36798d;

        /* renamed from: e  reason: collision with root package name */
        int f36799e;

        /* renamed from: f  reason: collision with root package name */
        int f36800f;

        /* renamed from: g  reason: collision with root package name */
        int f36801g;

        a(ConstraintWidget constraintWidget, h1.d dVar, int i10) {
            this.f36795a = new WeakReference(constraintWidget);
            this.f36796b = dVar.A(constraintWidget.O);
            this.f36797c = dVar.A(constraintWidget.P);
            this.f36798d = dVar.A(constraintWidget.Q);
            this.f36799e = dVar.A(constraintWidget.R);
            this.f36800f = dVar.A(constraintWidget.S);
            this.f36801g = i10;
        }
    }

    public o(int i10) {
        int i11 = f36788g;
        f36788g = i11 + 1;
        this.f36790b = i11;
        this.f36792d = i10;
    }

    private String e() {
        int i10 = this.f36792d;
        if (i10 == 0) {
            return "Horizontal";
        }
        if (i10 == 1) {
            return "Vertical";
        }
        if (i10 == 2) {
            return "Both";
        }
        return "Unknown";
    }

    private int j(h1.d dVar, ArrayList arrayList, int i10) {
        int A;
        int A2;
        ConstraintWidgetContainer constraintWidgetContainer = (ConstraintWidgetContainer) ((ConstraintWidget) arrayList.get(0)).K();
        dVar.G();
        constraintWidgetContainer.g(dVar, false);
        for (int i11 = 0; i11 < arrayList.size(); i11++) {
            ((ConstraintWidget) arrayList.get(i11)).g(dVar, false);
        }
        if (i10 == 0 && constraintWidgetContainer.X0 > 0) {
            androidx.constraintlayout.core.widgets.b.b(constraintWidgetContainer, dVar, arrayList, 0);
        }
        if (i10 == 1 && constraintWidgetContainer.Y0 > 0) {
            androidx.constraintlayout.core.widgets.b.b(constraintWidgetContainer, dVar, arrayList, 1);
        }
        try {
            dVar.C();
        } catch (Exception e10) {
            System.err.println(e10.toString() + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE + Arrays.toString(e10.getStackTrace()).replace("[", "   at ").replace(",", "\n   at").replace("]", ""));
        }
        this.f36793e = new ArrayList();
        for (int i12 = 0; i12 < arrayList.size(); i12++) {
            this.f36793e.add(new a((ConstraintWidget) arrayList.get(i12), dVar, i10));
        }
        if (i10 == 0) {
            A = dVar.A(constraintWidgetContainer.O);
            A2 = dVar.A(constraintWidgetContainer.Q);
            dVar.G();
        } else {
            A = dVar.A(constraintWidgetContainer.P);
            A2 = dVar.A(constraintWidgetContainer.R);
            dVar.G();
        }
        return A2 - A;
    }

    public boolean a(ConstraintWidget constraintWidget) {
        if (this.f36789a.contains(constraintWidget)) {
            return false;
        }
        this.f36789a.add(constraintWidget);
        return true;
    }

    public void b(ArrayList arrayList) {
        int size = this.f36789a.size();
        if (this.f36794f != -1 && size > 0) {
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                o oVar = (o) arrayList.get(i10);
                if (this.f36794f == oVar.f36790b) {
                    g(this.f36792d, oVar);
                }
            }
        }
        if (size == 0) {
            arrayList.remove(this);
        }
    }

    public int c() {
        return this.f36790b;
    }

    public int d() {
        return this.f36792d;
    }

    public int f(h1.d dVar, int i10) {
        if (this.f36789a.size() == 0) {
            return 0;
        }
        return j(dVar, this.f36789a, i10);
    }

    public void g(int i10, o oVar) {
        Iterator it = this.f36789a.iterator();
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            oVar.a(constraintWidget);
            if (i10 == 0) {
                constraintWidget.I0 = oVar.c();
            } else {
                constraintWidget.J0 = oVar.c();
            }
        }
        this.f36794f = oVar.f36790b;
    }

    public void h(boolean z10) {
        this.f36791c = z10;
    }

    public void i(int i10) {
        this.f36792d = i10;
    }

    public String toString() {
        Iterator it;
        String str = e() + " [" + this.f36790b + "] <";
        while (this.f36789a.iterator().hasNext()) {
            str = str + " " + ((ConstraintWidget) it.next()).t();
        }
        return str + " >";
    }
}
