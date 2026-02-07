package androidx.core.view.accessibility;

import android.graphics.Rect;
import android.os.Build;
import android.os.Bundle;
import android.text.SpannableString;
import android.text.Spanned;
import android.text.TextUtils;
import android.text.style.ClickableSpan;
import android.util.Log;
import android.util.SparseArray;
import android.view.View;
import android.view.accessibility.AccessibilityNodeInfo;
import androidx.core.view.accessibility.AccessibilityViewCommand;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AccessibilityNodeInfoCompat {

    /* renamed from: d  reason: collision with root package name */
    private static int f3749d;

    /* renamed from: a  reason: collision with root package name */
    private final AccessibilityNodeInfo f3750a;

    /* renamed from: b  reason: collision with root package name */
    public int f3751b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f3752c = -1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        public static final a A;
        public static final a B;
        public static final a C;
        public static final a D;
        public static final a E;
        public static final a F;
        public static final a G;
        public static final a H;
        public static final a I;
        public static final a J;
        public static final a K;
        public static final a L;
        public static final a M;
        public static final a N;
        public static final a O;
        public static final a P;
        public static final a Q;
        public static final a R;
        public static final a S;
        public static final a T;
        public static final a U;
        public static final a V;

        /* renamed from: e  reason: collision with root package name */
        public static final a f3753e = new a(1, null);

        /* renamed from: f  reason: collision with root package name */
        public static final a f3754f = new a(2, null);

        /* renamed from: g  reason: collision with root package name */
        public static final a f3755g = new a(4, null);

        /* renamed from: h  reason: collision with root package name */
        public static final a f3756h = new a(8, null);

        /* renamed from: i  reason: collision with root package name */
        public static final a f3757i = new a(16, null);

        /* renamed from: j  reason: collision with root package name */
        public static final a f3758j = new a(32, null);

        /* renamed from: k  reason: collision with root package name */
        public static final a f3759k = new a(64, null);

        /* renamed from: l  reason: collision with root package name */
        public static final a f3760l = new a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null);

        /* renamed from: m  reason: collision with root package name */
        public static final a f3761m = new a((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, (CharSequence) null, AccessibilityViewCommand.b.class);

        /* renamed from: n  reason: collision with root package name */
        public static final a f3762n = new a((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, (CharSequence) null, AccessibilityViewCommand.b.class);

        /* renamed from: o  reason: collision with root package name */
        public static final a f3763o = new a((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, (CharSequence) null, AccessibilityViewCommand.c.class);

        /* renamed from: p  reason: collision with root package name */
        public static final a f3764p = new a((int) RecyclerView.ItemAnimator.FLAG_MOVED, (CharSequence) null, AccessibilityViewCommand.c.class);

        /* renamed from: q  reason: collision with root package name */
        public static final a f3765q = new a(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, null);

        /* renamed from: r  reason: collision with root package name */
        public static final a f3766r = new a(8192, null);

        /* renamed from: s  reason: collision with root package name */
        public static final a f3767s = new a(16384, null);

        /* renamed from: t  reason: collision with root package name */
        public static final a f3768t = new a(PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS, null);

        /* renamed from: u  reason: collision with root package name */
        public static final a f3769u = new a(65536, null);

        /* renamed from: v  reason: collision with root package name */
        public static final a f3770v = new a(131072, (CharSequence) null, AccessibilityViewCommand.g.class);

        /* renamed from: w  reason: collision with root package name */
        public static final a f3771w = new a(262144, null);

        /* renamed from: x  reason: collision with root package name */
        public static final a f3772x = new a(524288, null);

        /* renamed from: y  reason: collision with root package name */
        public static final a f3773y = new a(1048576, null);

        /* renamed from: z  reason: collision with root package name */
        public static final a f3774z = new a(2097152, (CharSequence) null, AccessibilityViewCommand.h.class);

        /* renamed from: a  reason: collision with root package name */
        final Object f3775a;

        /* renamed from: b  reason: collision with root package name */
        private final int f3776b;

        /* renamed from: c  reason: collision with root package name */
        private final Class f3777c;

        /* renamed from: d  reason: collision with root package name */
        protected final AccessibilityViewCommand f3778d;

        static {
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction2;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction3;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction4;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction5;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction6;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction7;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction8;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction9;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction10;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction11;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction12;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction13;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction14;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction15;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction16;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction17;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction18;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction19;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction20;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction21;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction22;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction23;
            AccessibilityNodeInfo.AccessibilityAction accessibilityAction24 = null;
            int i10 = Build.VERSION.SDK_INT;
            A = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_SHOW_ON_SCREEN, 16908342, null, null, null);
            B = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_TO_POSITION, 16908343, null, null, AccessibilityViewCommand.e.class);
            C = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_UP, 16908344, null, null, null);
            D = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_LEFT, 16908345, null, null, null);
            E = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_DOWN, 16908346, null, null, null);
            F = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_RIGHT, 16908347, null, null, null);
            if (i10 >= 29) {
                accessibilityAction = AccessibilityNodeInfo.AccessibilityAction.ACTION_PAGE_UP;
            } else {
                accessibilityAction = null;
            }
            G = new a(accessibilityAction, 16908358, null, null, null);
            if (i10 >= 29) {
                accessibilityAction23 = AccessibilityNodeInfo.AccessibilityAction.ACTION_PAGE_DOWN;
                accessibilityAction2 = accessibilityAction23;
            } else {
                accessibilityAction2 = null;
            }
            H = new a(accessibilityAction2, 16908359, null, null, null);
            if (i10 >= 29) {
                accessibilityAction22 = AccessibilityNodeInfo.AccessibilityAction.ACTION_PAGE_LEFT;
                accessibilityAction3 = accessibilityAction22;
            } else {
                accessibilityAction3 = null;
            }
            I = new a(accessibilityAction3, 16908360, null, null, null);
            if (i10 >= 29) {
                accessibilityAction21 = AccessibilityNodeInfo.AccessibilityAction.ACTION_PAGE_RIGHT;
                accessibilityAction4 = accessibilityAction21;
            } else {
                accessibilityAction4 = null;
            }
            J = new a(accessibilityAction4, 16908361, null, null, null);
            K = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_CONTEXT_CLICK, 16908348, null, null, null);
            L = new a(AccessibilityNodeInfo.AccessibilityAction.ACTION_SET_PROGRESS, 16908349, null, null, AccessibilityViewCommand.f.class);
            if (i10 >= 26) {
                accessibilityAction5 = AccessibilityNodeInfo.AccessibilityAction.ACTION_MOVE_WINDOW;
            } else {
                accessibilityAction5 = null;
            }
            M = new a(accessibilityAction5, 16908354, null, null, AccessibilityViewCommand.d.class);
            if (i10 >= 28) {
                accessibilityAction6 = AccessibilityNodeInfo.AccessibilityAction.ACTION_SHOW_TOOLTIP;
            } else {
                accessibilityAction6 = null;
            }
            N = new a(accessibilityAction6, 16908356, null, null, null);
            if (i10 >= 28) {
                accessibilityAction20 = AccessibilityNodeInfo.AccessibilityAction.ACTION_HIDE_TOOLTIP;
                accessibilityAction7 = accessibilityAction20;
            } else {
                accessibilityAction7 = null;
            }
            O = new a(accessibilityAction7, 16908357, null, null, null);
            if (i10 >= 30) {
                accessibilityAction19 = AccessibilityNodeInfo.AccessibilityAction.ACTION_PRESS_AND_HOLD;
                accessibilityAction8 = accessibilityAction19;
            } else {
                accessibilityAction8 = null;
            }
            P = new a(accessibilityAction8, 16908362, null, null, null);
            if (i10 >= 30) {
                accessibilityAction18 = AccessibilityNodeInfo.AccessibilityAction.ACTION_IME_ENTER;
                accessibilityAction9 = accessibilityAction18;
            } else {
                accessibilityAction9 = null;
            }
            Q = new a(accessibilityAction9, 16908372, null, null, null);
            if (i10 >= 32) {
                accessibilityAction17 = AccessibilityNodeInfo.AccessibilityAction.ACTION_DRAG_START;
                accessibilityAction10 = accessibilityAction17;
            } else {
                accessibilityAction10 = null;
            }
            R = new a(accessibilityAction10, 16908373, null, null, null);
            if (i10 >= 32) {
                accessibilityAction16 = AccessibilityNodeInfo.AccessibilityAction.ACTION_DRAG_DROP;
                accessibilityAction11 = accessibilityAction16;
            } else {
                accessibilityAction11 = null;
            }
            S = new a(accessibilityAction11, 16908374, null, null, null);
            if (i10 >= 32) {
                accessibilityAction15 = AccessibilityNodeInfo.AccessibilityAction.ACTION_DRAG_CANCEL;
                accessibilityAction12 = accessibilityAction15;
            } else {
                accessibilityAction12 = null;
            }
            T = new a(accessibilityAction12, 16908375, null, null, null);
            if (i10 >= 33) {
                accessibilityAction14 = AccessibilityNodeInfo.AccessibilityAction.ACTION_SHOW_TEXT_SUGGESTIONS;
                accessibilityAction13 = accessibilityAction14;
            } else {
                accessibilityAction13 = null;
            }
            U = new a(accessibilityAction13, 16908376, null, null, null);
            if (i10 >= 34) {
                accessibilityAction24 = d.a();
            }
            V = new a(accessibilityAction24, 16908382, null, null, null);
        }

        public a(int i10, CharSequence charSequence) {
            this(null, i10, charSequence, null, null);
        }

        public a a(CharSequence charSequence, AccessibilityViewCommand accessibilityViewCommand) {
            return new a(null, this.f3776b, charSequence, accessibilityViewCommand, this.f3777c);
        }

        public int b() {
            return ((AccessibilityNodeInfo.AccessibilityAction) this.f3775a).getId();
        }

        public CharSequence c() {
            return ((AccessibilityNodeInfo.AccessibilityAction) this.f3775a).getLabel();
        }

        public boolean d(View view, Bundle bundle) {
            String name;
            if (this.f3778d != null) {
                Class cls = this.f3777c;
                if (cls != null) {
                    try {
                        android.support.v4.media.session.b.a(cls.getDeclaredConstructor(null).newInstance(null));
                        throw null;
                    } catch (Exception e10) {
                        Class cls2 = this.f3777c;
                        if (cls2 == null) {
                            name = "null";
                        } else {
                            name = cls2.getName();
                        }
                        Log.e("A11yActionCompat", "Failed to execute command with argument class ViewCommandArgument: " + name, e10);
                    }
                }
                return this.f3778d.a(view, null);
            }
            return false;
        }

        public boolean equals(Object obj) {
            if (obj == null || !(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            Object obj2 = this.f3775a;
            if (obj2 == null) {
                if (aVar.f3775a != null) {
                    return false;
                }
                return true;
            } else if (!obj2.equals(aVar.f3775a)) {
                return false;
            } else {
                return true;
            }
        }

        public int hashCode() {
            Object obj = this.f3775a;
            if (obj != null) {
                return obj.hashCode();
            }
            return 0;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("AccessibilityActionCompat: ");
            String j10 = AccessibilityNodeInfoCompat.j(this.f3776b);
            if (j10.equals("ACTION_UNKNOWN") && c() != null) {
                j10 = c().toString();
            }
            sb2.append(j10);
            return sb2.toString();
        }

        public a(int i10, CharSequence charSequence, AccessibilityViewCommand accessibilityViewCommand) {
            this(null, i10, charSequence, accessibilityViewCommand, null);
        }

        a(Object obj) {
            this(obj, 0, null, null, null);
        }

        private a(int i10, CharSequence charSequence, Class cls) {
            this(null, i10, charSequence, null, cls);
        }

        a(Object obj, int i10, CharSequence charSequence, AccessibilityViewCommand accessibilityViewCommand, Class cls) {
            this.f3776b = i10;
            this.f3778d = accessibilityViewCommand;
            if (obj == null) {
                this.f3775a = new AccessibilityNodeInfo.AccessibilityAction(i10, charSequence);
            } else {
                this.f3775a = obj;
            }
            this.f3777c = cls;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        public static CharSequence a(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.getStateDescription();
        }

        public static void b(AccessibilityNodeInfo accessibilityNodeInfo, CharSequence charSequence) {
            accessibilityNodeInfo.setStateDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        public static String a(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.getUniqueId();
        }

        public static boolean b(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.isTextSelectable();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        public static AccessibilityNodeInfo.AccessibilityAction a() {
            return AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_IN_DIRECTION;
        }

        public static void b(AccessibilityNodeInfo accessibilityNodeInfo, Rect rect) {
            accessibilityNodeInfo.getBoundsInWindow(rect);
        }

        public static CharSequence c(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.getContainerTitle();
        }

        public static boolean d(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.isAccessibilityDataSensitive();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {
        /* JADX INFO: Access modifiers changed from: private */
        public static int b(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.getChecked();
        }

        public static int c(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.getExpandedState();
        }

        public static CharSequence d(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.getSupplementalDescription();
        }

        public static boolean e(AccessibilityNodeInfo accessibilityNodeInfo) {
            return accessibilityNodeInfo.isFieldRequired();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f {

        /* renamed from: a  reason: collision with root package name */
        final Object f3779a;

        f(Object obj) {
            this.f3779a = obj;
        }

        public static f a(int i10, int i11, boolean z10) {
            return new f(AccessibilityNodeInfo.CollectionInfo.obtain(i10, i11, z10));
        }

        public static f b(int i10, int i11, boolean z10, int i12) {
            return new f(AccessibilityNodeInfo.CollectionInfo.obtain(i10, i11, z10, i12));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: a  reason: collision with root package name */
        final Object f3780a;

        g(Object obj) {
            this.f3780a = obj;
        }

        public static g a(int i10, int i11, int i12, int i13, boolean z10) {
            return new g(AccessibilityNodeInfo.CollectionItemInfo.obtain(i10, i11, i12, i13, z10));
        }

        public static g b(int i10, int i11, int i12, int i13, boolean z10, boolean z11) {
            return new g(AccessibilityNodeInfo.CollectionItemInfo.obtain(i10, i11, i12, i13, z10, z11));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h {

        /* renamed from: a  reason: collision with root package name */
        final Object f3781a;

        h(Object obj) {
            this.f3781a = obj;
        }

        public static h d(int i10, float f10, float f11, float f12) {
            return new h(AccessibilityNodeInfo.RangeInfo.obtain(i10, f10, f11, f12));
        }

        public float a() {
            return ((AccessibilityNodeInfo.RangeInfo) this.f3781a).getCurrent();
        }

        public float b() {
            return ((AccessibilityNodeInfo.RangeInfo) this.f3781a).getMax();
        }

        public float c() {
            return ((AccessibilityNodeInfo.RangeInfo) this.f3781a).getMin();
        }
    }

    private AccessibilityNodeInfoCompat(AccessibilityNodeInfo accessibilityNodeInfo) {
        this.f3750a = accessibilityNodeInfo;
    }

    private SparseArray D(View view) {
        SparseArray G = G(view);
        if (G == null) {
            SparseArray sparseArray = new SparseArray();
            view.setTag(o1.e.I, sparseArray);
            return sparseArray;
        }
        return G;
    }

    private SparseArray G(View view) {
        return (SparseArray) view.getTag(o1.e.I);
    }

    private boolean N() {
        return !h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_START_KEY").isEmpty();
    }

    private int O(ClickableSpan clickableSpan, SparseArray sparseArray) {
        if (sparseArray != null) {
            for (int i10 = 0; i10 < sparseArray.size(); i10++) {
                if (clickableSpan.equals((ClickableSpan) ((WeakReference) sparseArray.valueAt(i10)).get())) {
                    return sparseArray.keyAt(i10);
                }
            }
        }
        int i11 = f3749d;
        f3749d = i11 + 1;
        return i11;
    }

    private void e(ClickableSpan clickableSpan, Spanned spanned, int i10) {
        h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_START_KEY").add(Integer.valueOf(spanned.getSpanStart(clickableSpan)));
        h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_END_KEY").add(Integer.valueOf(spanned.getSpanEnd(clickableSpan)));
        h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_FLAGS_KEY").add(Integer.valueOf(spanned.getSpanFlags(clickableSpan)));
        h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_ID_KEY").add(Integer.valueOf(i10));
    }

    private void g() {
        this.f3750a.getExtras().remove("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_START_KEY");
        this.f3750a.getExtras().remove("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_END_KEY");
        this.f3750a.getExtras().remove("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_FLAGS_KEY");
        this.f3750a.getExtras().remove("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_ID_KEY");
    }

    private List h(String str) {
        ArrayList<Integer> integerArrayList = this.f3750a.getExtras().getIntegerArrayList(str);
        if (integerArrayList == null) {
            ArrayList<Integer> arrayList = new ArrayList<>();
            this.f3750a.getExtras().putIntegerArrayList(str, arrayList);
            return arrayList;
        }
        return integerArrayList;
    }

    public static AccessibilityNodeInfoCompat h1(AccessibilityNodeInfo accessibilityNodeInfo) {
        return new AccessibilityNodeInfoCompat(accessibilityNodeInfo);
    }

    static String j(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                switch (i10) {
                    case 4:
                        return "ACTION_SELECT";
                    case 8:
                        return "ACTION_CLEAR_SELECTION";
                    case 16:
                        return "ACTION_CLICK";
                    case 32:
                        return "ACTION_LONG_CLICK";
                    case 64:
                        return "ACTION_ACCESSIBILITY_FOCUS";
                    case IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT /* 128 */:
                        return "ACTION_CLEAR_ACCESSIBILITY_FOCUS";
                    case IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER /* 256 */:
                        return "ACTION_NEXT_AT_MOVEMENT_GRANULARITY";
                    case IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING /* 512 */:
                        return "ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY";
                    case IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET /* 1024 */:
                        return "ACTION_NEXT_HTML_ELEMENT";
                    case RecyclerView.ItemAnimator.FLAG_MOVED /* 2048 */:
                        return "ACTION_PREVIOUS_HTML_ELEMENT";
                    case RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT /* 4096 */:
                        return "ACTION_SCROLL_FORWARD";
                    case 8192:
                        return "ACTION_SCROLL_BACKWARD";
                    case 16384:
                        return "ACTION_COPY";
                    case PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS /* 32768 */:
                        return "ACTION_PASTE";
                    case 65536:
                        return "ACTION_CUT";
                    case 131072:
                        return "ACTION_SET_SELECTION";
                    case 262144:
                        return "ACTION_EXPAND";
                    case 524288:
                        return "ACTION_COLLAPSE";
                    case 2097152:
                        return "ACTION_SET_TEXT";
                    case 16908354:
                        return "ACTION_MOVE_WINDOW";
                    case 16908382:
                        return "ACTION_SCROLL_IN_DIRECTION";
                    default:
                        switch (i10) {
                            case 16908342:
                                return "ACTION_SHOW_ON_SCREEN";
                            case 16908343:
                                return "ACTION_SCROLL_TO_POSITION";
                            case 16908344:
                                return "ACTION_SCROLL_UP";
                            case 16908345:
                                return "ACTION_SCROLL_LEFT";
                            case 16908346:
                                return "ACTION_SCROLL_DOWN";
                            case 16908347:
                                return "ACTION_SCROLL_RIGHT";
                            case 16908348:
                                return "ACTION_CONTEXT_CLICK";
                            case 16908349:
                                return "ACTION_SET_PROGRESS";
                            default:
                                switch (i10) {
                                    case 16908356:
                                        return "ACTION_SHOW_TOOLTIP";
                                    case 16908357:
                                        return "ACTION_HIDE_TOOLTIP";
                                    case 16908358:
                                        return "ACTION_PAGE_UP";
                                    case 16908359:
                                        return "ACTION_PAGE_DOWN";
                                    case 16908360:
                                        return "ACTION_PAGE_LEFT";
                                    case 16908361:
                                        return "ACTION_PAGE_RIGHT";
                                    case 16908362:
                                        return "ACTION_PRESS_AND_HOLD";
                                    default:
                                        switch (i10) {
                                            case 16908372:
                                                return "ACTION_IME_ENTER";
                                            case 16908373:
                                                return "ACTION_DRAG_START";
                                            case 16908374:
                                                return "ACTION_DRAG_DROP";
                                            case 16908375:
                                                return "ACTION_DRAG_CANCEL";
                                            default:
                                                return "ACTION_UNKNOWN";
                                        }
                                }
                        }
                }
            }
            return "ACTION_CLEAR_FOCUS";
        }
        return "ACTION_FOCUS";
    }

    public static AccessibilityNodeInfoCompat j0() {
        return h1(AccessibilityNodeInfo.obtain());
    }

    public static AccessibilityNodeInfoCompat k0(View view) {
        return h1(AccessibilityNodeInfo.obtain(view));
    }

    private boolean l(int i10) {
        Bundle A = A();
        if (A == null || (A.getInt("androidx.view.accessibility.AccessibilityNodeInfoCompat.BOOLEAN_PROPERTY_KEY", 0) & i10) != i10) {
            return false;
        }
        return true;
    }

    public static AccessibilityNodeInfoCompat l0(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        return h1(AccessibilityNodeInfo.obtain(accessibilityNodeInfoCompat.f3750a));
    }

    private void p0(View view) {
        SparseArray G = G(view);
        if (G != null) {
            ArrayList arrayList = new ArrayList();
            for (int i10 = 0; i10 < G.size(); i10++) {
                if (((WeakReference) G.valueAt(i10)).get() == null) {
                    arrayList.add(Integer.valueOf(i10));
                }
            }
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                G.remove(((Integer) arrayList.get(i11)).intValue());
            }
        }
    }

    private String q() {
        int p10 = p();
        if (p10 == 1) {
            return "TRUE";
        }
        if (p10 == 2) {
            return "PARTIAL";
        }
        return "FALSE";
    }

    private void r0(int i10, boolean z10) {
        Bundle A = A();
        if (A != null) {
            int i11 = A.getInt("androidx.view.accessibility.AccessibilityNodeInfoCompat.BOOLEAN_PROPERTY_KEY", 0) & (~i10);
            if (!z10) {
                i10 = 0;
            }
            A.putInt("androidx.view.accessibility.AccessibilityNodeInfoCompat.BOOLEAN_PROPERTY_KEY", i10 | i11);
        }
    }

    public static ClickableSpan[] t(CharSequence charSequence) {
        if (charSequence instanceof Spanned) {
            return (ClickableSpan[]) ((Spanned) charSequence).getSpans(0, charSequence.length(), ClickableSpan.class);
        }
        return null;
    }

    static String z(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        return "UNKNOWN";
                    }
                    return "FULL";
                }
                return "PARTIAL";
            }
            return "COLLAPSED";
        }
        return "UNDEFINED";
    }

    public Bundle A() {
        return this.f3750a.getExtras();
    }

    public void A0(CharSequence charSequence) {
        this.f3750a.setContentDescription(charSequence);
    }

    public CharSequence B() {
        if (Build.VERSION.SDK_INT >= 26) {
            return this.f3750a.getHintText();
        }
        return this.f3750a.getExtras().getCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.HINT_TEXT_KEY");
    }

    public void B0(boolean z10) {
        this.f3750a.setDismissable(z10);
    }

    public int C() {
        return this.f3750a.getMaxTextLength();
    }

    public void C0(boolean z10) {
        this.f3750a.setEnabled(z10);
    }

    public void D0(CharSequence charSequence) {
        this.f3750a.setError(charSequence);
    }

    public CharSequence E() {
        return this.f3750a.getPackageName();
    }

    public void E0(boolean z10) {
        this.f3750a.setFocusable(z10);
    }

    public h F() {
        AccessibilityNodeInfo.RangeInfo rangeInfo = this.f3750a.getRangeInfo();
        if (rangeInfo != null) {
            return new h(rangeInfo);
        }
        return null;
    }

    public void F0(boolean z10) {
        this.f3750a.setFocused(z10);
    }

    public void G0(boolean z10) {
        r0(67108864, z10);
    }

    public CharSequence H() {
        if (Build.VERSION.SDK_INT >= 30) {
            return b.a(this.f3750a);
        }
        return this.f3750a.getExtras().getCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.STATE_DESCRIPTION_KEY");
    }

    public void H0(boolean z10) {
        if (Build.VERSION.SDK_INT >= 28) {
            this.f3750a.setHeading(z10);
        } else {
            r0(2, z10);
        }
    }

    public CharSequence I() {
        if (Build.VERSION.SDK_INT >= 36) {
            return e.d(this.f3750a);
        }
        return this.f3750a.getExtras().getCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.SUPPLEMENTAL_DESCRIPTION_KEY");
    }

    public void I0(CharSequence charSequence) {
        if (Build.VERSION.SDK_INT >= 26) {
            this.f3750a.setHintText(charSequence);
        } else {
            this.f3750a.getExtras().putCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.HINT_TEXT_KEY", charSequence);
        }
    }

    public CharSequence J() {
        if (N()) {
            List h10 = h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_START_KEY");
            List h11 = h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_END_KEY");
            List h12 = h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_FLAGS_KEY");
            List h13 = h("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_ID_KEY");
            SpannableString spannableString = new SpannableString(TextUtils.substring(this.f3750a.getText(), 0, this.f3750a.getText().length()));
            for (int i10 = 0; i10 < h10.size(); i10++) {
                spannableString.setSpan(new c2.a(((Integer) h13.get(i10)).intValue(), this, A().getInt("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_ACTION_ID_KEY")), ((Integer) h10.get(i10)).intValue(), ((Integer) h11.get(i10)).intValue(), ((Integer) h12.get(i10)).intValue());
            }
            return spannableString;
        }
        return this.f3750a.getText();
    }

    public void J0(boolean z10) {
        this.f3750a.setImportantForAccessibility(z10);
    }

    public CharSequence K() {
        if (Build.VERSION.SDK_INT >= 28) {
            return this.f3750a.getTooltipText();
        }
        return this.f3750a.getExtras().getCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.TOOLTIP_TEXT_KEY");
    }

    public void K0(View view) {
        this.f3750a.setLabelFor(view);
    }

    public String L() {
        if (Build.VERSION.SDK_INT >= 33) {
            return c.a(this.f3750a);
        }
        return this.f3750a.getExtras().getString("androidx.view.accessibility.AccessibilityNodeInfoCompat.UNIQUE_ID_KEY");
    }

    public void L0(View view) {
        this.f3750a.setLabeledBy(view);
    }

    public String M() {
        return this.f3750a.getViewIdResourceName();
    }

    public void M0(int i10) {
        this.f3750a.setMaxTextLength(i10);
    }

    public void N0(int i10) {
        this.f3750a.setMovementGranularities(i10);
    }

    public void O0(CharSequence charSequence) {
        this.f3750a.setPackageName(charSequence);
    }

    public boolean P() {
        if (Build.VERSION.SDK_INT >= 34) {
            return d.d(this.f3750a);
        }
        return l(64);
    }

    public void P0(CharSequence charSequence) {
        if (Build.VERSION.SDK_INT >= 28) {
            this.f3750a.setPaneTitle(charSequence);
        } else {
            this.f3750a.getExtras().putCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.PANE_TITLE_KEY", charSequence);
        }
    }

    public boolean Q() {
        return this.f3750a.isAccessibilityFocused();
    }

    public void Q0(View view) {
        this.f3751b = -1;
        this.f3750a.setParent(view);
    }

    public boolean R() {
        return this.f3750a.isCheckable();
    }

    public void R0(View view, int i10) {
        this.f3751b = i10;
        this.f3750a.setParent(view, i10);
    }

    public boolean S() {
        return this.f3750a.isChecked();
    }

    public void S0(h hVar) {
        this.f3750a.setRangeInfo((AccessibilityNodeInfo.RangeInfo) hVar.f3781a);
    }

    public boolean T() {
        return this.f3750a.isClickable();
    }

    public void T0(CharSequence charSequence) {
        this.f3750a.getExtras().putCharSequence("AccessibilityNodeInfo.roleDescription", charSequence);
    }

    public boolean U() {
        return this.f3750a.isContextClickable();
    }

    public void U0(boolean z10) {
        if (Build.VERSION.SDK_INT >= 28) {
            this.f3750a.setScreenReaderFocusable(z10);
        } else {
            r0(1, z10);
        }
    }

    public boolean V() {
        return this.f3750a.isEnabled();
    }

    public void V0(boolean z10) {
        this.f3750a.setScrollable(z10);
    }

    public boolean W() {
        if (Build.VERSION.SDK_INT >= 36) {
            return e.e(this.f3750a);
        }
        return this.f3750a.getExtras().getBoolean("androidx.view.accessibility.AccessibilityNodeInfoCompat.IS_REQUIRED_KEY");
    }

    public void W0(boolean z10) {
        this.f3750a.setSelected(z10);
    }

    public boolean X() {
        return this.f3750a.isFocusable();
    }

    public void X0(boolean z10) {
        if (Build.VERSION.SDK_INT >= 26) {
            this.f3750a.setShowingHintText(z10);
        } else {
            r0(4, z10);
        }
    }

    public boolean Y() {
        return this.f3750a.isFocused();
    }

    public void Y0(View view) {
        this.f3752c = -1;
        this.f3750a.setSource(view);
    }

    public boolean Z() {
        return l(67108864);
    }

    public void Z0(View view, int i10) {
        this.f3752c = i10;
        this.f3750a.setSource(view, i10);
    }

    public void a(int i10) {
        this.f3750a.addAction(i10);
    }

    public boolean a0() {
        return this.f3750a.isImportantForAccessibility();
    }

    public void a1(CharSequence charSequence) {
        if (Build.VERSION.SDK_INT >= 30) {
            b.b(this.f3750a, charSequence);
        } else {
            this.f3750a.getExtras().putCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.STATE_DESCRIPTION_KEY", charSequence);
        }
    }

    public void b(a aVar) {
        this.f3750a.addAction((AccessibilityNodeInfo.AccessibilityAction) aVar.f3775a);
    }

    public boolean b0() {
        return this.f3750a.isLongClickable();
    }

    public void b1(CharSequence charSequence) {
        this.f3750a.setText(charSequence);
    }

    public void c(View view) {
        this.f3750a.addChild(view);
    }

    public boolean c0() {
        return this.f3750a.isPassword();
    }

    public void c1(CharSequence charSequence) {
        if (Build.VERSION.SDK_INT >= 28) {
            this.f3750a.setTooltipText(charSequence);
        } else {
            this.f3750a.getExtras().putCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.TOOLTIP_TEXT_KEY", charSequence);
        }
    }

    public void d(View view, int i10) {
        this.f3750a.addChild(view, i10);
    }

    public boolean d0() {
        if (Build.VERSION.SDK_INT >= 28) {
            return this.f3750a.isScreenReaderFocusable();
        }
        return l(1);
    }

    public void d1(View view) {
        this.f3750a.setTraversalAfter(view);
    }

    public boolean e0() {
        return this.f3750a.isScrollable();
    }

    public void e1(String str) {
        this.f3750a.setViewIdResourceName(str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof AccessibilityNodeInfoCompat)) {
            return false;
        }
        AccessibilityNodeInfoCompat accessibilityNodeInfoCompat = (AccessibilityNodeInfoCompat) obj;
        AccessibilityNodeInfo accessibilityNodeInfo = this.f3750a;
        if (accessibilityNodeInfo == null) {
            if (accessibilityNodeInfoCompat.f3750a != null) {
                return false;
            }
        } else if (!accessibilityNodeInfo.equals(accessibilityNodeInfoCompat.f3750a)) {
            return false;
        }
        if (this.f3752c == accessibilityNodeInfoCompat.f3752c && this.f3751b == accessibilityNodeInfoCompat.f3751b) {
            return true;
        }
        return false;
    }

    public void f(CharSequence charSequence, View view) {
        if (Build.VERSION.SDK_INT < 26) {
            g();
            p0(view);
            ClickableSpan[] t10 = t(charSequence);
            if (t10 != null && t10.length > 0) {
                A().putInt("androidx.view.accessibility.AccessibilityNodeInfoCompat.SPANS_ACTION_ID_KEY", o1.e.f41373a);
                SparseArray D = D(view);
                for (int i10 = 0; i10 < t10.length; i10++) {
                    int O = O(t10[i10], D);
                    D.put(O, new WeakReference(t10[i10]));
                    e(t10[i10], (Spanned) charSequence, O);
                }
            }
        }
    }

    public boolean f0() {
        return this.f3750a.isSelected();
    }

    public void f1(boolean z10) {
        this.f3750a.setVisibleToUser(z10);
    }

    public boolean g0() {
        if (Build.VERSION.SDK_INT >= 26) {
            return this.f3750a.isShowingHintText();
        }
        return l(4);
    }

    public AccessibilityNodeInfo g1() {
        return this.f3750a;
    }

    public boolean h0() {
        if (Build.VERSION.SDK_INT >= 33) {
            return c.b(this.f3750a);
        }
        return l(8388608);
    }

    public int hashCode() {
        AccessibilityNodeInfo accessibilityNodeInfo = this.f3750a;
        if (accessibilityNodeInfo == null) {
            return 0;
        }
        return accessibilityNodeInfo.hashCode();
    }

    public List i() {
        List<AccessibilityNodeInfo.AccessibilityAction> actionList = this.f3750a.getActionList();
        ArrayList arrayList = new ArrayList();
        int size = actionList.size();
        for (int i10 = 0; i10 < size; i10++) {
            arrayList.add(new a(actionList.get(i10)));
        }
        return arrayList;
    }

    public boolean i0() {
        return this.f3750a.isVisibleToUser();
    }

    public int k() {
        return this.f3750a.getActions();
    }

    public void m(Rect rect) {
        this.f3750a.getBoundsInParent(rect);
    }

    public boolean m0(int i10, Bundle bundle) {
        return this.f3750a.performAction(i10, bundle);
    }

    public void n(Rect rect) {
        this.f3750a.getBoundsInScreen(rect);
    }

    public void n0() {
    }

    public void o(Rect rect) {
        if (Build.VERSION.SDK_INT >= 34) {
            d.b(this.f3750a, rect);
            return;
        }
        Rect rect2 = (Rect) this.f3750a.getExtras().getParcelable("androidx.view.accessibility.AccessibilityNodeInfoCompat.BOUNDS_IN_WINDOW_KEY");
        if (rect2 != null) {
            rect.set(rect2.left, rect2.top, rect2.right, rect2.bottom);
        }
    }

    public boolean o0(a aVar) {
        return this.f3750a.removeAction((AccessibilityNodeInfo.AccessibilityAction) aVar.f3775a);
    }

    public int p() {
        if (Build.VERSION.SDK_INT >= 36) {
            return e.b(this.f3750a);
        }
        return this.f3750a.getExtras().getInt("androidx.view.accessibility.AccessibilityNodeInfoCompat.CHECKED_KEY", this.f3750a.isChecked() ? 1 : 0);
    }

    public void q0(boolean z10) {
        this.f3750a.setAccessibilityFocused(z10);
    }

    public int r() {
        return this.f3750a.getChildCount();
    }

    public CharSequence s() {
        return this.f3750a.getClassName();
    }

    public void s0(Rect rect) {
        this.f3750a.setBoundsInParent(rect);
    }

    public void t0(Rect rect) {
        this.f3750a.setBoundsInScreen(rect);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(super.toString());
        Rect rect = new Rect();
        m(rect);
        sb2.append("; boundsInParent: " + rect);
        n(rect);
        sb2.append("; boundsInScreen: " + rect);
        o(rect);
        sb2.append("; boundsInWindow: " + rect);
        sb2.append("; packageName: ");
        sb2.append(E());
        sb2.append("; className: ");
        sb2.append(s());
        sb2.append("; text: ");
        sb2.append(J());
        sb2.append("; error: ");
        sb2.append(x());
        sb2.append("; maxTextLength: ");
        sb2.append(C());
        sb2.append("; stateDescription: ");
        sb2.append(H());
        sb2.append("; contentDescription: ");
        sb2.append(w());
        sb2.append("; supplementalDescription: ");
        sb2.append(I());
        sb2.append("; tooltipText: ");
        sb2.append(K());
        sb2.append("; viewIdResName: ");
        sb2.append(M());
        sb2.append("; uniqueId: ");
        sb2.append(L());
        sb2.append("; checkable: ");
        sb2.append(R());
        sb2.append("; checked: ");
        sb2.append(q());
        sb2.append("; fieldRequired: ");
        sb2.append(W());
        sb2.append("; focusable: ");
        sb2.append(X());
        sb2.append("; focused: ");
        sb2.append(Y());
        sb2.append("; selected: ");
        sb2.append(f0());
        sb2.append("; clickable: ");
        sb2.append(T());
        sb2.append("; longClickable: ");
        sb2.append(b0());
        sb2.append("; contextClickable: ");
        sb2.append(U());
        sb2.append("; expandedState: ");
        sb2.append(z(y()));
        sb2.append("; enabled: ");
        sb2.append(V());
        sb2.append("; password: ");
        sb2.append(c0());
        sb2.append("; scrollable: " + e0());
        sb2.append("; containerTitle: ");
        sb2.append(v());
        sb2.append("; granularScrollingSupported: ");
        sb2.append(Z());
        sb2.append("; importantForAccessibility: ");
        sb2.append(a0());
        sb2.append("; visible: ");
        sb2.append(i0());
        sb2.append("; isTextSelectable: ");
        sb2.append(h0());
        sb2.append("; accessibilityDataSensitive: ");
        sb2.append(P());
        sb2.append("; [");
        List i10 = i();
        for (int i11 = 0; i11 < i10.size(); i11++) {
            a aVar = (a) i10.get(i11);
            String j10 = j(aVar.b());
            if (j10.equals("ACTION_UNKNOWN") && aVar.c() != null) {
                j10 = aVar.c().toString();
            }
            sb2.append(j10);
            if (i11 != i10.size() - 1) {
                sb2.append(", ");
            }
        }
        sb2.append("]");
        return sb2.toString();
    }

    public f u() {
        AccessibilityNodeInfo.CollectionInfo collectionInfo = this.f3750a.getCollectionInfo();
        if (collectionInfo != null) {
            return new f(collectionInfo);
        }
        return null;
    }

    public void u0(boolean z10) {
        this.f3750a.setCheckable(z10);
    }

    public CharSequence v() {
        if (Build.VERSION.SDK_INT >= 34) {
            return d.c(this.f3750a);
        }
        return this.f3750a.getExtras().getCharSequence("androidx.view.accessibility.AccessibilityNodeInfoCompat.CONTAINER_TITLE_KEY");
    }

    public void v0(boolean z10) {
        this.f3750a.setChecked(z10);
    }

    public CharSequence w() {
        return this.f3750a.getContentDescription();
    }

    public void w0(CharSequence charSequence) {
        this.f3750a.setClassName(charSequence);
    }

    public CharSequence x() {
        return this.f3750a.getError();
    }

    public void x0(boolean z10) {
        this.f3750a.setClickable(z10);
    }

    public int y() {
        if (Build.VERSION.SDK_INT >= 36) {
            return e.c(this.f3750a);
        }
        return this.f3750a.getExtras().getInt("androidx.view.accessibility.AccessibilityNodeInfoCompat.EXPANDED_STATE_KEY", 0);
    }

    public void y0(Object obj) {
        AccessibilityNodeInfo.CollectionInfo collectionInfo;
        AccessibilityNodeInfo accessibilityNodeInfo = this.f3750a;
        if (obj == null) {
            collectionInfo = null;
        } else {
            collectionInfo = (AccessibilityNodeInfo.CollectionInfo) ((f) obj).f3779a;
        }
        accessibilityNodeInfo.setCollectionInfo(collectionInfo);
    }

    public void z0(Object obj) {
        AccessibilityNodeInfo.CollectionItemInfo collectionItemInfo;
        AccessibilityNodeInfo accessibilityNodeInfo = this.f3750a;
        if (obj == null) {
            collectionItemInfo = null;
        } else {
            collectionItemInfo = (AccessibilityNodeInfo.CollectionItemInfo) ((g) obj).f3780a;
        }
        accessibilityNodeInfo.setCollectionItemInfo(collectionItemInfo);
    }
}
