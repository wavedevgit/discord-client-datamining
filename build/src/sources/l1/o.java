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
    static int f36298g;

    /* renamed from: b  reason: collision with root package name */
    int f36300b;

    /* renamed from: d  reason: collision with root package name */
    int f36302d;

    /* renamed from: a  reason: collision with root package name */
    ArrayList f36299a = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    boolean f36301c = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f36303e = null;

    /* renamed from: f  reason: collision with root package name */
    private int f36304f = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        WeakReference f36305a;

        /* renamed from: b  reason: collision with root package name */
        int f36306b;

        /* renamed from: c  reason: collision with root package name */
        int f36307c;

        /* renamed from: d  reason: collision with root package name */
        int f36308d;

        /* renamed from: e  reason: collision with root package name */
        int f36309e;

        /* renamed from: f  reason: collision with root package name */
        int f36310f;

        /* renamed from: g  reason: collision with root package name */
        int f36311g;

        a(ConstraintWidget constraintWidget, h1.d dVar, int i10) {
            this.f36305a = new WeakReference(constraintWidget);
            this.f36306b = dVar.A(constraintWidget.O);
            this.f36307c = dVar.A(constraintWidget.P);
            this.f36308d = dVar.A(constraintWidget.Q);
            this.f36309e = dVar.A(constraintWidget.R);
            this.f36310f = dVar.A(constraintWidget.S);
            this.f36311g = i10;
        }
    }

    public o(int i10) {
        int i11 = f36298g;
        f36298g = i11 + 1;
        this.f36300b = i11;
        this.f36302d = i10;
    }

    private String e() {
        int i10 = this.f36302d;
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
        this.f36303e = new ArrayList();
        for (int i12 = 0; i12 < arrayList.size(); i12++) {
            this.f36303e.add(new a((ConstraintWidget) arrayList.get(i12), dVar, i10));
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
        if (this.f36299a.contains(constraintWidget)) {
            return false;
        }
        this.f36299a.add(constraintWidget);
        return true;
    }

    public void b(ArrayList arrayList) {
        int size = this.f36299a.size();
        if (this.f36304f != -1 && size > 0) {
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                o oVar = (o) arrayList.get(i10);
                if (this.f36304f == oVar.f36300b) {
                    g(this.f36302d, oVar);
                }
            }
        }
        if (size == 0) {
            arrayList.remove(this);
        }
    }

    public int c() {
        return this.f36300b;
    }

    public int d() {
        return this.f36302d;
    }

    public int f(h1.d dVar, int i10) {
        if (this.f36299a.size() == 0) {
            return 0;
        }
        return j(dVar, this.f36299a, i10);
    }

    public void g(int i10, o oVar) {
        Iterator it = this.f36299a.iterator();
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            oVar.a(constraintWidget);
            if (i10 == 0) {
                constraintWidget.I0 = oVar.c();
            } else {
                constraintWidget.J0 = oVar.c();
            }
        }
        this.f36304f = oVar.f36300b;
    }

    public void h(boolean z10) {
        this.f36301c = z10;
    }

    public void i(int i10) {
        this.f36302d = i10;
    }

    public String toString() {
        Iterator it;
        String str = e() + " [" + this.f36300b + "] <";
        while (this.f36299a.iterator().hasNext()) {
            str = str + " " + ((ConstraintWidget) it.next()).t();
        }
        return str + " >";
    }
}
