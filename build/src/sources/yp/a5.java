package yp;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintSet;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f54871a;

        static {
            int[] iArr = new int[StyleElements.PositionType.values().length];
            try {
                iArr[StyleElements.PositionType.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StyleElements.PositionType.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f54871a = iArr;
        }
    }

    public static final void a(ViewGroup viewGroup, ConstraintSet constraintSet, List componentViews, List childrenIds, int[] iArr, StyleElements.PositionType positionType, int i10) {
        double d10;
        Integer num;
        Integer num2;
        int i11;
        int i12;
        int i13;
        int i14;
        Object obj;
        k5 k5Var;
        Object obj2;
        k5 k5Var2;
        e0 e0Var;
        List d11;
        ViewGroup root = viewGroup;
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(constraintSet, "constraintSet");
        Intrinsics.checkNotNullParameter(componentViews, "componentViews");
        Intrinsics.checkNotNullParameter(childrenIds, "childrenIds");
        if (iArr != null) {
            d10 = kotlin.collections.i.G0(iArr);
        } else {
            d10 = 0.0d;
        }
        ArrayList arrayList = new ArrayList();
        List list = childrenIds;
        int i15 = 0;
        int i16 = 0;
        for (Object obj3 : list) {
            int i17 = i16 + 1;
            if (i16 < 0) {
                CollectionsKt.v();
            }
            int intValue = ((Number) obj3).intValue();
            Context context = root.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            gq.b bVar = new gq.b(context);
            bVar.setId(View.generateViewId());
            bVar.setSaveEnabled(false);
            if (i16 != CollectionsKt.n(childrenIds)) {
                Iterator it = componentViews.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj2 = it.next();
                        if (((wp.a) obj2).d().getId() == intValue) {
                            break;
                        }
                    } else {
                        obj2 = null;
                        break;
                    }
                }
                wp.a aVar = (wp.a) obj2;
                if (aVar != null) {
                    k5Var2 = aVar.c();
                } else {
                    k5Var2 = null;
                }
                if (k5Var2 instanceof e0) {
                    e0Var = (e0) k5Var2;
                } else {
                    e0Var = null;
                }
                if (e0Var != null && (d11 = e0Var.d()) != null) {
                    d11.add(bVar);
                }
                root.addView(bVar);
                constraintSet.l(bVar.getId(), i10);
                constraintSet.n(bVar.getId(), true);
                constraintSet.k(bVar.getId(), 1);
                constraintSet.m(bVar.getId(), true);
                arrayList.add(Integer.valueOf(bVar.getId()));
            }
            i16 = i17;
        }
        int i18 = 0;
        for (Object obj4 : list) {
            int i19 = i18 + 1;
            if (i18 < 0) {
                CollectionsKt.v();
            }
            int intValue2 = ((Number) obj4).intValue();
            if (i18 > 0) {
                num = (Integer) arrayList.get(i18 - 1);
            } else {
                num = null;
            }
            if (i18 == CollectionsKt.n(childrenIds)) {
                constraintSet.g(intValue2, 7, i15, 7);
                Iterator it2 = componentViews.iterator();
                while (true) {
                    if (it2.hasNext()) {
                        obj = it2.next();
                        if (((wp.a) obj).d().getId() == intValue2) {
                            break;
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                wp.a aVar2 = (wp.a) obj;
                if (aVar2 != null) {
                    k5Var = aVar2.c();
                } else {
                    k5Var = null;
                }
                if (k5Var != null && num != null) {
                    ((gq.b) root.findViewById(num.intValue())).getAssociatedComponents().add(new WeakReference<>(aVar2.c()));
                }
                num2 = null;
                i11 = 6;
            } else {
                num2 = (Integer) arrayList.get(i18);
                i11 = 6;
                constraintSet.g(intValue2, 7, num2.intValue(), 6);
                constraintSet.g(num2.intValue(), 7, ((Number) childrenIds.get(i19)).intValue(), 6);
                constraintSet.g(num2.intValue(), 6, intValue2, 7);
            }
            if (num != null) {
                constraintSet.g(intValue2, i11, num.intValue(), 7);
            } else {
                constraintSet.g(intValue2, i11, 0, i11);
            }
            constraintSet.k(intValue2, -2);
            constraintSet.m(intValue2, true);
            if (d10 > 0.0d) {
                if (iArr != null) {
                    i14 = iArr[i18];
                } else {
                    i14 = 0;
                }
                double d12 = i14 / d10;
                if (d12 > 0.0d) {
                    constraintSet.B(intValue2, (float) d12);
                } else {
                    constraintSet.l(intValue2, -2);
                }
                i12 = 0;
            } else {
                i12 = 0;
                constraintSet.j(intValue2, 0);
            }
            constraintSet.g(intValue2, 3, i12, 3);
            constraintSet.g(intValue2, 4, i12, 4);
            if (num2 != null) {
                constraintSet.g(num2.intValue(), 3, i12, 3);
                constraintSet.g(num2.intValue(), 4, i12, 4);
            }
            if (positionType == null) {
                i13 = -1;
            } else {
                i13 = a.f54871a[positionType.ordinal()];
            }
            if (i13 != 1) {
                if (i13 != 2) {
                    constraintSet.D(intValue2, 0.5f);
                } else {
                    constraintSet.D(intValue2, 1.0f);
                }
            } else {
                constraintSet.D(intValue2, 0.0f);
            }
            i15 = i12;
            i18 = i19;
            root = viewGroup;
        }
    }

    public static final void b(ViewGroup root, ConstraintSet constraintSet, List componentViews, List childrenIds, StyleElements.PositionType positionType, int i10) {
        Integer num;
        Integer num2;
        int i11;
        Object obj;
        k5 k5Var;
        Object obj2;
        k5 k5Var2;
        e0 e0Var;
        List d10;
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(constraintSet, "constraintSet");
        Intrinsics.checkNotNullParameter(componentViews, "componentViews");
        Intrinsics.checkNotNullParameter(childrenIds, "childrenIds");
        ArrayList arrayList = new ArrayList();
        List list = childrenIds;
        int i12 = 0;
        for (Object obj3 : list) {
            int i13 = i12 + 1;
            if (i12 < 0) {
                CollectionsKt.v();
            }
            int intValue = ((Number) obj3).intValue();
            Context context = root.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            gq.b bVar = new gq.b(context);
            bVar.setId(View.generateViewId());
            bVar.setSaveEnabled(false);
            if (i12 != CollectionsKt.n(childrenIds)) {
                Iterator it = componentViews.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj2 = it.next();
                        if (((wp.a) obj2).d().getId() == intValue) {
                            break;
                        }
                    } else {
                        obj2 = null;
                        break;
                    }
                }
                wp.a aVar = (wp.a) obj2;
                if (aVar != null) {
                    k5Var2 = aVar.c();
                } else {
                    k5Var2 = null;
                }
                if (k5Var2 instanceof e0) {
                    e0Var = (e0) k5Var2;
                } else {
                    e0Var = null;
                }
                if (e0Var != null && (d10 = e0Var.d()) != null) {
                    d10.add(bVar);
                }
                root.addView(bVar);
                constraintSet.l(bVar.getId(), 1);
                constraintSet.n(bVar.getId(), true);
                constraintSet.k(bVar.getId(), i10);
                constraintSet.m(bVar.getId(), true);
                arrayList.add(Integer.valueOf(bVar.getId()));
            }
            i12 = i13;
        }
        int i14 = 0;
        for (Object obj4 : list) {
            int i15 = i14 + 1;
            if (i14 < 0) {
                CollectionsKt.v();
            }
            int intValue2 = ((Number) obj4).intValue();
            if (i14 > 0) {
                num = (Integer) arrayList.get(i14 - 1);
            } else {
                num = null;
            }
            if (i14 == CollectionsKt.n(childrenIds)) {
                constraintSet.g(intValue2, 4, 0, 4);
                Iterator it2 = componentViews.iterator();
                while (true) {
                    if (it2.hasNext()) {
                        obj = it2.next();
                        if (((wp.a) obj).d().getId() == intValue2) {
                            break;
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                wp.a aVar2 = (wp.a) obj;
                if (aVar2 != null) {
                    k5Var = aVar2.c();
                } else {
                    k5Var = null;
                }
                if (k5Var != null && num != null) {
                    ((gq.b) root.findViewById(num.intValue())).getAssociatedComponents().add(new WeakReference<>(aVar2.c()));
                }
                num2 = null;
            } else {
                num2 = (Integer) arrayList.get(i14);
                constraintSet.g(num2.intValue(), 3, intValue2, 4);
            }
            if (i14 == 0) {
                constraintSet.g(intValue2, 3, 0, 3);
            }
            if (num != null) {
                constraintSet.g(num.intValue(), 4, intValue2, 3);
                constraintSet.g(intValue2, 3, num.intValue(), 4);
            }
            constraintSet.g(intValue2, 6, 0, 6);
            constraintSet.g(intValue2, 7, 0, 7);
            if (num2 != null) {
                constraintSet.g(num2.intValue(), 6, 0, 6);
                constraintSet.g(num2.intValue(), 7, 0, 7);
            }
            constraintSet.k(intValue2, -2);
            constraintSet.l(intValue2, 0);
            if (positionType == null) {
                i11 = -1;
            } else {
                i11 = a.f54871a[positionType.ordinal()];
            }
            if (i11 != 1) {
                if (i11 != 2) {
                    constraintSet.A(intValue2, 0.5f);
                } else {
                    constraintSet.A(intValue2, 1.0f);
                }
            } else {
                constraintSet.A(intValue2, 0.0f);
            }
            i14 = i15;
        }
    }
}
