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
    static int f35739g;

    /* renamed from: b  reason: collision with root package name */
    int f35741b;

    /* renamed from: d  reason: collision with root package name */
    int f35743d;

    /* renamed from: a  reason: collision with root package name */
    ArrayList f35740a = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    boolean f35742c = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f35744e = null;

    /* renamed from: f  reason: collision with root package name */
    private int f35745f = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        WeakReference f35746a;

        /* renamed from: b  reason: collision with root package name */
        int f35747b;

        /* renamed from: c  reason: collision with root package name */
        int f35748c;

        /* renamed from: d  reason: collision with root package name */
        int f35749d;

        /* renamed from: e  reason: collision with root package name */
        int f35750e;

        /* renamed from: f  reason: collision with root package name */
        int f35751f;

        /* renamed from: g  reason: collision with root package name */
        int f35752g;

        a(ConstraintWidget constraintWidget, h1.d dVar, int i10) {
            this.f35746a = new WeakReference(constraintWidget);
            this.f35747b = dVar.A(constraintWidget.O);
            this.f35748c = dVar.A(constraintWidget.P);
            this.f35749d = dVar.A(constraintWidget.Q);
            this.f35750e = dVar.A(constraintWidget.R);
            this.f35751f = dVar.A(constraintWidget.S);
            this.f35752g = i10;
        }
    }

    public o(int i10) {
        int i11 = f35739g;
        f35739g = i11 + 1;
        this.f35741b = i11;
        this.f35743d = i10;
    }

    private String e() {
        int i10 = this.f35743d;
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
        this.f35744e = new ArrayList();
        for (int i12 = 0; i12 < arrayList.size(); i12++) {
            this.f35744e.add(new a((ConstraintWidget) arrayList.get(i12), dVar, i10));
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
        if (this.f35740a.contains(constraintWidget)) {
            return false;
        }
        this.f35740a.add(constraintWidget);
        return true;
    }

    public void b(ArrayList arrayList) {
        int size = this.f35740a.size();
        if (this.f35745f != -1 && size > 0) {
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                o oVar = (o) arrayList.get(i10);
                if (this.f35745f == oVar.f35741b) {
                    g(this.f35743d, oVar);
                }
            }
        }
        if (size == 0) {
            arrayList.remove(this);
        }
    }

    public int c() {
        return this.f35741b;
    }

    public int d() {
        return this.f35743d;
    }

    public int f(h1.d dVar, int i10) {
        if (this.f35740a.size() == 0) {
            return 0;
        }
        return j(dVar, this.f35740a, i10);
    }

    public void g(int i10, o oVar) {
        Iterator it = this.f35740a.iterator();
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            oVar.a(constraintWidget);
            if (i10 == 0) {
                constraintWidget.I0 = oVar.c();
            } else {
                constraintWidget.J0 = oVar.c();
            }
        }
        this.f35745f = oVar.f35741b;
    }

    public void h(boolean z10) {
        this.f35742c = z10;
    }

    public void i(int i10) {
        this.f35743d = i10;
    }

    public String toString() {
        Iterator it;
        String str = e() + " [" + this.f35741b + "] <";
        while (this.f35740a.iterator().hasNext()) {
            str = str + " " + ((ConstraintWidget) it.next()).t();
        }
        return str + " >";
    }
}
