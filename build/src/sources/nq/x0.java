package nq;

import android.graphics.Bitmap;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputAddressComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputPhoneNumberComponent;
import com.withpersona.sdk2.inquiry.ui.network.b;
import dq.k5;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KTypeProjection;
import kotlinx.coroutines.flow.Flow;
import nq.g3;
import nq.v4;
import pq.a;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 {

    /* renamed from: a  reason: collision with root package name */
    private final b.a f41891a;

    /* renamed from: b  reason: collision with root package name */
    private final a.C0568a f41892b;

    public x0(b.a addressAutocompleteWorker, a.C0568a addressDetailsWorker) {
        Intrinsics.checkNotNullParameter(addressAutocompleteWorker, "addressAutocompleteWorker");
        Intrinsics.checkNotNullParameter(addressDetailsWorker, "addressDetailsWorker");
        this.f41891a = addressAutocompleteWorker;
        this.f41892b = addressDetailsWorker;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.s) k5Var).a(str));
        if (str != null && str.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        action.e(g3.a.b(aVar, m10, null, Y(x0Var, z10, aVar.d(), k5Var.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r B0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newValue) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newValue, "newValue");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.y
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = x0.C0(g3.a.this, k5Var, newValue, x0Var, (r.c) obj);
                return C0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) k5Var;
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, governmentIdNfcScanComponent.l(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), governmentIdNfcScanComponent.getName(), GovernmentIdNfcScan.cardAccessNumberName), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r D0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newValue) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newValue, "newValue");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.n0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = x0.E0(g3.a.this, k5Var, newValue, x0Var, (r.c) obj);
                return E0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) k5Var;
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, governmentIdNfcScanComponent.o(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), governmentIdNfcScanComponent.getName(), GovernmentIdNfcScan.documentNumberName), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r F0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String str) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = x0.G0(g3.a.this, k5Var, str, x0Var, (r.c) obj);
                return G0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) k5Var;
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, governmentIdNfcScanComponent.n(str));
        if (str != null && str.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), governmentIdNfcScanComponent.getName(), GovernmentIdNfcScan.dateOfBirthName), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r H0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String str) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.p0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = x0.I0(g3.a.this, k5Var, str, x0Var, (r.c) obj);
                return I0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) k5Var;
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, governmentIdNfcScanComponent.p(str));
        if (str != null && str.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), governmentIdNfcScanComponent.getName(), GovernmentIdNfcScan.expirationDateName), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r J0(final g3.a aVar, final k5 k5Var, final eq.g gVar) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K0;
                K0 = x0.K0(g3.a.this, k5Var, gVar, (r.c) obj);
                return K0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(g3.a aVar, k5 k5Var, eq.g gVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((GovernmentIdNfcScanComponent) k5Var).q(gVar)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r L0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final List newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.a0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M0;
                M0 = x0.M0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return M0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(g3.a aVar, k5 k5Var, List list, x0 x0Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, bVar.w((dq.b4) CollectionsKt.firstOrNull(list))), null, Y(x0Var, list.isEmpty(), aVar.d(), bVar.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r N0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final List newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O0;
                O0 = x0.O0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return O0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(g3.a aVar, k5 k5Var, List list, x0 x0Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, bVar.x((dq.b4) CollectionsKt.firstOrNull(list))), null, Y(x0Var, list.isEmpty(), aVar.d(), bVar.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r P0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final List selectedOptions) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.m0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Q0;
                Q0 = x0.Q0(g3.a.this, k5Var, selectedOptions, x0Var, (r.c) obj);
                return Q0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(g3.a aVar, k5 k5Var, List list, x0 x0Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.a4) k5Var).e(list)), null, Y(x0Var, list.isEmpty(), aVar.d(), k5Var.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r R0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S0;
                S0 = x0.S0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return S0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var;
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, bVar.z(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, Y(x0Var, z10, aVar.d(), bVar.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r T0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final Set stringSet) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(stringSet, "stringSet");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit U0;
                U0 = x0.U0(g3.a.this, k5Var, stringSet, x0Var, (r.c) obj);
                return U0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(g3.a aVar, k5 k5Var, Set set, x0 x0Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.b5) k5Var).a(set)), null, Y(x0Var, set.isEmpty(), aVar.d(), k5Var.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r V0(final g3.a aVar, final k5 k5Var, final boolean z10) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W0;
                W0 = x0.W0(g3.a.this, k5Var, z10, (r.c) obj);
                return W0;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W0(g3.a aVar, k5 k5Var, boolean z10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.c) k5Var).j(Boolean.valueOf(z10))), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f31988a;
    }

    private final List X(boolean z10, List list, String str, String str2) {
        Object obj;
        List list2 = list;
        Iterator it = list2.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (Intrinsics.areEqual(((UiComponentError) obj).getName(), str)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        UiComponentError uiComponentError = (UiComponentError) obj;
        if (!z10) {
            if (uiComponentError instanceof UiComponentError.UiGovernmentIdNfcScanComponentError) {
                UiComponentError.UiGovernmentIdNfcScanComponentError uiGovernmentIdNfcScanComponentError = (UiComponentError.UiGovernmentIdNfcScanComponentError) uiComponentError;
                Map<String, String> message = uiGovernmentIdNfcScanComponentError.getMessage();
                LinkedHashMap linkedHashMap = new LinkedHashMap();
                for (Map.Entry<String, String> entry : message.entrySet()) {
                    if (!Intrinsics.areEqual(entry.getKey(), str2)) {
                        linkedHashMap.put(entry.getKey(), entry.getValue());
                    }
                }
                uiGovernmentIdNfcScanComponentError.setMessage(linkedHashMap);
                return list;
            } else if (uiComponentError instanceof UiComponentError.UiInputAddressComponentError) {
                UiComponentError.UiInputAddressComponentError uiInputAddressComponentError = (UiComponentError.UiInputAddressComponentError) uiComponentError;
                Map<String, String> message2 = uiInputAddressComponentError.getMessage();
                LinkedHashMap linkedHashMap2 = new LinkedHashMap();
                for (Map.Entry<String, String> entry2 : message2.entrySet()) {
                    if (!Intrinsics.areEqual(entry2.getKey(), str2)) {
                        linkedHashMap2.put(entry2.getKey(), entry2.getValue());
                    }
                }
                uiInputAddressComponentError.setMessage(linkedHashMap2);
                return list;
            } else {
                ArrayList arrayList = new ArrayList();
                for (Object obj2 : list2) {
                    if (!Intrinsics.areEqual(((UiComponentError) obj2).getName(), str)) {
                        arrayList.add(obj2);
                    }
                }
                return arrayList;
            }
        }
        return list;
    }

    static /* synthetic */ List Y(x0 x0Var, boolean z10, List list, String str, String str2, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            str2 = null;
        }
        return x0Var.X(z10, list, str, str2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r a0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.o0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b02;
                b02 = x0.b0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return b02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.w4) k5Var).a(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, Y(x0Var, z10, aVar.d(), k5Var.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r c0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d02;
                d02 = x0.d0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return d02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.c) k5Var).n(str).P(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), k5Var.getName(), "street_1"), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r e0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f02;
                f02 = x0.f0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return f02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.c) k5Var).e(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), k5Var.getName(), "street_2"), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r g0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h02;
                h02 = x0.h0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return h02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.c) k5Var).f(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), k5Var.getName(), "city"), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r i0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.l0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j02;
                j02 = x0.j0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return j02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.c) k5Var).p(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), k5Var.getName(), "subdivision"), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r k0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.t
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l02;
                l02 = x0.l0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return l02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(g3.a aVar, k5 k5Var, String str, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.c) k5Var).l(str));
        if (str.length() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, x0Var.X(z10, aVar.d(), k5Var.getName(), "postal_code"), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r m0(final g3.a aVar, final k5 k5Var, final b.AbstractC0265b response) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(response, "response");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n02;
                n02 = x0.n0(b.AbstractC0265b.this, aVar, k5Var, (r.c) obj);
                return n02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(b.AbstractC0265b abstractC0265b, g3.a aVar, k5 k5Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (abstractC0265b instanceof b.AbstractC0265b.C0266b) {
            action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((InputAddressComponent) k5Var).Q(((b.AbstractC0265b.C0266b) abstractC0265b).a()).P(null)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        } else if (!(abstractC0265b instanceof b.AbstractC0265b.a)) {
            throw new or.p();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r o0(final g3.a aVar, final k5 k5Var, final a.b response) {
        zm.r c10;
        zm.r c11;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof a.b.C0570b) {
            c11 = zm.b0.c(null, new Function1() { // from class: nq.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit p02;
                    p02 = x0.p0(g3.a.this, k5Var, response, (r.c) obj);
                    return p02;
                }
            }, 1, null);
            return c11;
        } else if (response instanceof a.b.C0569a) {
            c10 = zm.b0.c(null, new Function1() { // from class: nq.c0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit q02;
                    q02 = x0.q0(a.b.this, (r.c) obj);
                    return q02;
                }
            }, 1, null);
            return c10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(g3.a aVar, k5 k5Var, a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List components = aVar.getComponents();
        Boolean bool = Boolean.FALSE;
        a.b.C0570b c0570b = (a.b.C0570b) bVar;
        InputAddressComponent n10 = ((InputAddressComponent) k5Var).j(bool).n(c0570b.a().e());
        String f10 = c0570b.a().f();
        if (f10 == null) {
            f10 = "";
        }
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(components, k5Var, n10.e(f10).f(c0570b.a().b()).p(c0570b.a().g()).l(c0570b.a().d()).R(null).O(bool)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new v4.c.d("Couldn't load address.", ((a.b.C0569a) bVar).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r r0(final g3.a aVar, final k5 k5Var, final boolean z10) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.k0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s02;
                s02 = x0.s0(g3.a.this, k5Var, z10, (r.c) obj);
                return s02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(g3.a aVar, k5 k5Var, boolean z10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.u4) k5Var).update(z10)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r t0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final List newText) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(newText, "newText");
        c10 = zm.b0.c(null, new Function1() { // from class: nq.q0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit u02;
                u02 = x0.u0(g3.a.this, k5Var, newText, x0Var, (r.c) obj);
                return u02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(g3.a aVar, k5 k5Var, List list, x0 x0Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        InputPhoneNumberComponent inputPhoneNumberComponent = (InputPhoneNumberComponent) k5Var;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, inputPhoneNumberComponent.p((dq.b4) CollectionsKt.firstOrNull(list))), null, Y(x0Var, list.isEmpty(), aVar.d(), inputPhoneNumberComponent.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r v0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final Number number) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.d0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit w02;
                w02 = x0.w0(g3.a.this, k5Var, number, x0Var, (r.c) obj);
                return w02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(g3.a aVar, k5 k5Var, Number number, x0 x0Var, r.c action) {
        boolean z10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List m10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.v4) k5Var).a(number));
        if (number == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        action.e(g3.a.b(aVar, m10, null, Y(x0Var, z10, aVar.d(), k5Var.getName(), null, 8, null), null, null, null, null, null, false, false, null, null, null, 8186, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r x0(final g3.a aVar, final k5 k5Var, final Bitmap bitmap) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.x
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y02;
                y02 = x0.y0(g3.a.this, k5Var, bitmap, (r.c) obj);
                return y02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(g3.a aVar, k5 k5Var, Bitmap bitmap, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), k5Var, ((dq.d) k5Var).b(bitmap)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r z0(final g3.a aVar, final k5 k5Var, final x0 x0Var, final String str) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: nq.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit A0;
                A0 = x0.A0(g3.a.this, k5Var, str, x0Var, (r.c) obj);
                return A0;
            }
        }, 1, null);
        return c10;
    }

    public final void Z(v4.b renderProps, final g3.a renderState, k.a context, final k5 component) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(component, "component");
        if (component instanceof dq.w4) {
            zm.n nVar = new zm.n(Reflection.typeOf(String.class), ((dq.w4) component).b().a());
            String name = component.getName();
            Function1 function1 = new Function1() { // from class: nq.a
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r a02;
                    a02 = x0.a0(g3.a.this, component, this, (String) obj);
                    return a02;
                }
            };
            KTypeProjection.a aVar = KTypeProjection.f32092c;
            zm.w.l(context, nVar, Reflection.typeOf(zm.o.class, aVar.d(Reflection.typeOf(String.class))), name, function1);
            if (component instanceof InputPhoneNumberComponent) {
                InputPhoneNumberComponent inputPhoneNumberComponent = (InputPhoneNumberComponent) component;
                zm.w.l(context, new zm.n(Reflection.typeOf(List.class, aVar.d(Reflection.typeOf(dq.b4.class))), inputPhoneNumberComponent.g().a()), Reflection.typeOf(zm.o.class, aVar.d(Reflection.typeOf(List.class, aVar.d(Reflection.typeOf(dq.b4.class))))), inputPhoneNumberComponent.getName() + ":country", new Function1() { // from class: nq.c
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r t02;
                        t02 = x0.t0(g3.a.this, component, this, (List) obj);
                        return t02;
                    }
                });
            }
        } else if (component instanceof dq.a4) {
            Flow a10 = ((dq.a4) component).a().a();
            KTypeProjection.a aVar2 = KTypeProjection.f32092c;
            zm.w.l(context, new zm.n(Reflection.typeOf(List.class, aVar2.d(Reflection.typeOf(dq.b4.class))), a10), Reflection.typeOf(zm.o.class, aVar2.d(Reflection.typeOf(List.class, aVar2.d(Reflection.typeOf(dq.b4.class))))), component.getName(), new Function1() { // from class: nq.h
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r P0;
                    P0 = x0.P0(g3.a.this, component, this, (List) obj);
                    return P0;
                }
            });
        } else if (component instanceof dq.b5) {
            Flow a11 = ((dq.b5) component).b().a();
            KTypeProjection.a aVar3 = KTypeProjection.f32092c;
            zm.w.l(context, new zm.n(Reflection.typeOf(Set.class, aVar3.d(Reflection.typeOf(String.class))), a11), Reflection.typeOf(zm.o.class, aVar3.d(Reflection.typeOf(Set.class, aVar3.d(Reflection.typeOf(String.class))))), component.getName(), new Function1() { // from class: nq.i
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r T0;
                    T0 = x0.T0(g3.a.this, component, this, (Set) obj);
                    return T0;
                }
            });
        } else {
            boolean z10 = component instanceof dq.c;
            Class cls = Boolean.TYPE;
            if (z10) {
                Function1 function12 = new Function1() { // from class: nq.j
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r V0;
                        V0 = x0.V0(g3.a.this, component, ((Boolean) obj).booleanValue());
                        return V0;
                    }
                };
                KTypeProjection.a aVar4 = KTypeProjection.f32092c;
                zm.w.l(context, new zm.n(Reflection.typeOf(cls), ((dq.c) component).o().a()), Reflection.typeOf(zm.o.class, aVar4.d(Reflection.typeOf(cls))), component.getName() + "UpdateCollapsedState", function12);
                dq.c cVar = (dq.c) component;
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), cVar.g().a()), Reflection.typeOf(zm.o.class, aVar4.d(Reflection.typeOf(String.class))), component.getName() + "UpdateAddressStreet1", new Function1() { // from class: nq.k
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r c02;
                        c02 = x0.c0(g3.a.this, component, this, (String) obj);
                        return c02;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), cVar.i().a()), Reflection.typeOf(zm.o.class, aVar4.d(Reflection.typeOf(String.class))), component.getName() + "UpdateAddressStreet2", new Function1() { // from class: nq.m
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r e02;
                        e02 = x0.e0(g3.a.this, component, this, (String) obj);
                        return e02;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), cVar.a().a()), Reflection.typeOf(zm.o.class, aVar4.d(Reflection.typeOf(String.class))), component.getName() + "UpdateAddressCity", new Function1() { // from class: nq.n
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r g02;
                        g02 = x0.g0(g3.a.this, component, this, (String) obj);
                        return g02;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), cVar.c().a()), Reflection.typeOf(zm.o.class, aVar4.d(Reflection.typeOf(String.class))), component.getName() + "UpdateAddressSubdivision", new Function1() { // from class: nq.o
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r i02;
                        i02 = x0.i0(g3.a.this, component, this, (String) obj);
                        return i02;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), cVar.b().a()), Reflection.typeOf(zm.o.class, aVar4.d(Reflection.typeOf(String.class))), component.getName() + "UpdateAddressPostalCode", new Function1() { // from class: nq.p
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r k02;
                        k02 = x0.k0(g3.a.this, component, this, (String) obj);
                        return k02;
                    }
                });
                if (component instanceof InputAddressComponent) {
                    InputAddressComponent inputAddressComponent = (InputAddressComponent) component;
                    String u10 = inputAddressComponent.u();
                    if (u10 != null) {
                        zm.w.l(context, this.f41891a.a(renderProps.n(), component, u10), Reflection.typeOf(com.withpersona.sdk2.inquiry.ui.network.b.class), inputAddressComponent.getName(), new Function1() { // from class: nq.l
                            @Override // kotlin.jvm.functions.Function1
                            public final Object invoke(Object obj) {
                                zm.r m02;
                                m02 = x0.m0(g3.a.this, component, (b.AbstractC0265b) obj);
                                return m02;
                            }
                        });
                    }
                    String w10 = inputAddressComponent.w();
                    if (w10 != null) {
                        zm.w.l(context, this.f41892b.a(renderProps.n(), w10), Reflection.typeOf(pq.a.class), "", new Function1() { // from class: nq.w
                            @Override // kotlin.jvm.functions.Function1
                            public final Object invoke(Object obj) {
                                zm.r o02;
                                o02 = x0.o0(g3.a.this, component, (a.b) obj);
                                return o02;
                            }
                        });
                    }
                }
            } else if (component instanceof dq.u4) {
                zm.w.l(context, new zm.n(Reflection.typeOf(cls), ((dq.u4) component).a().a()), Reflection.typeOf(zm.o.class, KTypeProjection.f32092c.d(Reflection.typeOf(cls))), component.getName(), new Function1() { // from class: nq.h0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r r02;
                        r02 = x0.r0(g3.a.this, component, ((Boolean) obj).booleanValue());
                        return r02;
                    }
                });
            } else if (component instanceof dq.v4) {
                zm.w.l(context, new zm.n(Reflection.nullableTypeOf(Number.class), ((dq.v4) component).b().a()), Reflection.typeOf(zm.o.class, KTypeProjection.f32092c.d(Reflection.nullableTypeOf(Number.class))), component.getName(), new Function1() { // from class: nq.r0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r v02;
                        v02 = x0.v0(g3.a.this, component, this, (Number) obj);
                        return v02;
                    }
                });
            } else if (component instanceof dq.d) {
                zm.w.l(context, new zm.n(Reflection.nullableTypeOf(Bitmap.class), ((dq.d) component).a().a()), Reflection.typeOf(zm.o.class, KTypeProjection.f32092c.d(Reflection.nullableTypeOf(Bitmap.class))), component.getName(), new Function1() { // from class: nq.s0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r x02;
                        x02 = x0.x0(g3.a.this, component, (Bitmap) obj);
                        return x02;
                    }
                });
            } else if (component instanceof dq.s) {
                zm.w.l(context, new zm.n(Reflection.nullableTypeOf(String.class), ((dq.s) component).b().e()), Reflection.typeOf(zm.o.class, KTypeProjection.f32092c.d(Reflection.nullableTypeOf(String.class))), component.getName(), new Function1() { // from class: nq.t0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r z02;
                        z02 = x0.z0(g3.a.this, component, this, (String) obj);
                        return z02;
                    }
                });
            } else if (component instanceof GovernmentIdNfcScanComponent) {
                GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) component;
                Function1 function13 = new Function1() { // from class: nq.u0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r B0;
                        B0 = x0.B0(g3.a.this, component, this, (String) obj);
                        return B0;
                    }
                };
                KTypeProjection.a aVar5 = KTypeProjection.f32092c;
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), governmentIdNfcScanComponent.c().a()), Reflection.typeOf(zm.o.class, aVar5.d(Reflection.typeOf(String.class))), governmentIdNfcScanComponent.getName() + "UpdateCardAccessNumber", function13);
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), governmentIdNfcScanComponent.g().a()), Reflection.typeOf(zm.o.class, aVar5.d(Reflection.typeOf(String.class))), governmentIdNfcScanComponent.getName() + "UpdateDocumentNumber", new Function1() { // from class: nq.v0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r D0;
                        D0 = x0.D0(g3.a.this, component, this, (String) obj);
                        return D0;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.nullableTypeOf(String.class), governmentIdNfcScanComponent.f().e()), Reflection.typeOf(zm.o.class, aVar5.d(Reflection.nullableTypeOf(String.class))), governmentIdNfcScanComponent.getName() + "UpdateDateOfBirth", new Function1() { // from class: nq.w0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r F0;
                        F0 = x0.F0(g3.a.this, component, this, (String) obj);
                        return F0;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.nullableTypeOf(String.class), governmentIdNfcScanComponent.i().e()), Reflection.typeOf(zm.o.class, aVar5.d(Reflection.nullableTypeOf(String.class))), governmentIdNfcScanComponent.getName() + "UpdateExpirationDate", new Function1() { // from class: nq.b
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r H0;
                        H0 = x0.H0(g3.a.this, component, this, (String) obj);
                        return H0;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.nullableTypeOf(eq.g.class), governmentIdNfcScanComponent.j().a()), Reflection.typeOf(zm.o.class, aVar5.d(Reflection.nullableTypeOf(eq.g.class))), governmentIdNfcScanComponent.getName(), new Function1() { // from class: nq.d
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r J0;
                        J0 = x0.J0(g3.a.this, component, (eq.g) obj);
                        return J0;
                    }
                });
            } else if (component instanceof com.withpersona.sdk2.inquiry.steps.ui.components.b) {
                com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) component;
                Flow a12 = bVar.f().a();
                KTypeProjection.a aVar6 = KTypeProjection.f32092c;
                zm.w.l(context, new zm.n(Reflection.typeOf(List.class, aVar6.d(Reflection.typeOf(dq.b4.class))), a12), Reflection.typeOf(zm.o.class, aVar6.d(Reflection.typeOf(List.class, aVar6.d(Reflection.typeOf(dq.b4.class))))), bVar.getName() + ":country", new Function1() { // from class: nq.e
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r L0;
                        L0 = x0.L0(g3.a.this, component, this, (List) obj);
                        return L0;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.typeOf(List.class, aVar6.d(Reflection.typeOf(dq.b4.class))), bVar.p().a()), Reflection.typeOf(zm.o.class, aVar6.d(Reflection.typeOf(List.class, aVar6.d(Reflection.typeOf(dq.b4.class))))), bVar.getName() + ":idType", new Function1() { // from class: nq.f
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r N0;
                        N0 = x0.N0(g3.a.this, component, this, (List) obj);
                        return N0;
                    }
                });
                zm.w.l(context, new zm.n(Reflection.typeOf(String.class), bVar.s().a()), Reflection.typeOf(zm.o.class, aVar6.d(Reflection.typeOf(String.class))), bVar.getName() + ":idValue", new Function1() { // from class: nq.g
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r R0;
                        R0 = x0.R0(g3.a.this, component, this, (String) obj);
                        return R0;
                    }
                });
            }
        }
    }
}
