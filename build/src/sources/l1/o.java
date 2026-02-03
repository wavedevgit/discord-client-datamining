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
    static int f36902g;

    /* renamed from: b  reason: collision with root package name */
    int f36904b;

    /* renamed from: d  reason: collision with root package name */
    int f36906d;

    /* renamed from: a  reason: collision with root package name */
    ArrayList f36903a = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    boolean f36905c = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f36907e = null;

    /* renamed from: f  reason: collision with root package name */
    private int f36908f = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        WeakReference f36909a;

        /* renamed from: b  reason: collision with root package name */
        int f36910b;

        /* renamed from: c  reason: collision with root package name */
        int f36911c;

        /* renamed from: d  reason: collision with root package name */
        int f36912d;

        /* renamed from: e  reason: collision with root package name */
        int f36913e;

        /* renamed from: f  reason: collision with root package name */
        int f36914f;

        /* renamed from: g  reason: collision with root package name */
        int f36915g;

        a(ConstraintWidget constraintWidget, h1.d dVar, int i10) {
            this.f36909a = new WeakReference(constraintWidget);
            this.f36910b = dVar.A(constraintWidget.O);
            this.f36911c = dVar.A(constraintWidget.P);
            this.f36912d = dVar.A(constraintWidget.Q);
            this.f36913e = dVar.A(constraintWidget.R);
            this.f36914f = dVar.A(constraintWidget.S);
            this.f36915g = i10;
        }
    }

    public o(int i10) {
        int i11 = f36902g;
        f36902g = i11 + 1;
        this.f36904b = i11;
        this.f36906d = i10;
    }

    private String e() {
        int i10 = this.f36906d;
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
        this.f36907e = new ArrayList();
        for (int i12 = 0; i12 < arrayList.size(); i12++) {
            this.f36907e.add(new a((ConstraintWidget) arrayList.get(i12), dVar, i10));
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
        if (this.f36903a.contains(constraintWidget)) {
            return false;
        }
        this.f36903a.add(constraintWidget);
        return true;
    }

    public void b(ArrayList arrayList) {
        int size = this.f36903a.size();
        if (this.f36908f != -1 && size > 0) {
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                o oVar = (o) arrayList.get(i10);
                if (this.f36908f == oVar.f36904b) {
                    g(this.f36906d, oVar);
                }
            }
        }
        if (size == 0) {
            arrayList.remove(this);
        }
    }

    public int c() {
        return this.f36904b;
    }

    public int d() {
        return this.f36906d;
    }

    public int f(h1.d dVar, int i10) {
        if (this.f36903a.size() == 0) {
            return 0;
        }
        return j(dVar, this.f36903a, i10);
    }

    public void g(int i10, o oVar) {
        Iterator it = this.f36903a.iterator();
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            oVar.a(constraintWidget);
            if (i10 == 0) {
                constraintWidget.I0 = oVar.c();
            } else {
                constraintWidget.J0 = oVar.c();
            }
        }
        this.f36908f = oVar.f36904b;
    }

    public void h(boolean z10) {
        this.f36905c = z10;
    }

    public void i(int i10) {
        this.f36906d = i10;
    }

    public String toString() {
        Iterator it;
        String str = e() + " [" + this.f36904b + "] <";
        while (this.f36903a.iterator().hasNext()) {
            str = str + " " + ((ConstraintWidget) it.next()).t();
        }
        return str + " >";
    }
}
