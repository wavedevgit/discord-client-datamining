package androidx.appcompat.app;

import android.content.Context;
import android.content.DialogInterface;
import android.content.res.TypedArray;
import android.database.Cursor;
import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.os.Message;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewStub;
import android.view.Window;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckedTextView;
import android.widget.CursorAdapter;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleCursorAdapter;
import android.widget.TextView;
import androidx.appcompat.widget.i0;
import androidx.core.view.h0;
import androidx.core.widget.NestedScrollView;
import java.lang.ref.WeakReference;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AlertController {
    NestedScrollView A;
    private Drawable C;
    private ImageView D;
    private TextView E;
    private TextView F;
    private View G;
    ListAdapter H;
    private int J;
    private int K;
    int L;
    int M;
    int N;
    int O;
    private boolean P;
    Handler R;

    /* renamed from: a  reason: collision with root package name */
    private final Context f894a;

    /* renamed from: b  reason: collision with root package name */
    final l f895b;

    /* renamed from: c  reason: collision with root package name */
    private final Window f896c;

    /* renamed from: d  reason: collision with root package name */
    private final int f897d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f898e;

    /* renamed from: f  reason: collision with root package name */
    private CharSequence f899f;

    /* renamed from: g  reason: collision with root package name */
    ListView f900g;

    /* renamed from: h  reason: collision with root package name */
    private View f901h;

    /* renamed from: i  reason: collision with root package name */
    private int f902i;

    /* renamed from: j  reason: collision with root package name */
    private int f903j;

    /* renamed from: k  reason: collision with root package name */
    private int f904k;

    /* renamed from: l  reason: collision with root package name */
    private int f905l;

    /* renamed from: m  reason: collision with root package name */
    private int f906m;

    /* renamed from: o  reason: collision with root package name */
    Button f908o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f909p;

    /* renamed from: q  reason: collision with root package name */
    Message f910q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f911r;

    /* renamed from: s  reason: collision with root package name */
    Button f912s;

    /* renamed from: t  reason: collision with root package name */
    private CharSequence f913t;

    /* renamed from: u  reason: collision with root package name */
    Message f914u;

    /* renamed from: v  reason: collision with root package name */
    private Drawable f915v;

    /* renamed from: w  reason: collision with root package name */
    Button f916w;

    /* renamed from: x  reason: collision with root package name */
    private CharSequence f917x;

    /* renamed from: y  reason: collision with root package name */
    Message f918y;

    /* renamed from: z  reason: collision with root package name */
    private Drawable f919z;

    /* renamed from: n  reason: collision with root package name */
    private boolean f907n = false;
    private int B = 0;
    int I = -1;
    private int Q = 0;
    private final View.OnClickListener S = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class RecycleListView extends ListView {

        /* renamed from: d  reason: collision with root package name */
        private final int f920d;

        /* renamed from: e  reason: collision with root package name */
        private final int f921e;

        public RecycleListView(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f.j.f24220c2);
            this.f921e = obtainStyledAttributes.getDimensionPixelOffset(f.j.f24225d2, -1);
            this.f920d = obtainStyledAttributes.getDimensionPixelOffset(f.j.f24230e2, -1);
        }

        public void a(boolean z10, boolean z11) {
            int i10;
            int i11;
            if (z11 && z10) {
                return;
            }
            int paddingLeft = getPaddingLeft();
            if (z10) {
                i10 = getPaddingTop();
            } else {
                i10 = this.f920d;
            }
            int paddingRight = getPaddingRight();
            if (z11) {
                i11 = getPaddingBottom();
            } else {
                i11 = this.f921e;
            }
            setPadding(paddingLeft, i10, paddingRight, i11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {
        a() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            Message message;
            Message message2;
            Message message3;
            Message message4;
            AlertController alertController = AlertController.this;
            if (view == alertController.f908o && (message4 = alertController.f910q) != null) {
                message = Message.obtain(message4);
            } else if (view == alertController.f912s && (message3 = alertController.f914u) != null) {
                message = Message.obtain(message3);
            } else if (view == alertController.f916w && (message2 = alertController.f918y) != null) {
                message = Message.obtain(message2);
            } else {
                message = null;
            }
            if (message != null) {
                message.sendToTarget();
            }
            AlertController alertController2 = AlertController.this;
            alertController2.R.obtainMessage(1, alertController2.f895b).sendToTarget();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        public int A;
        public int B;
        public int C;
        public int D;
        public boolean[] F;
        public boolean G;
        public boolean H;
        public DialogInterface.OnMultiChoiceClickListener J;
        public Cursor K;
        public String L;
        public String M;
        public AdapterView.OnItemSelectedListener N;

        /* renamed from: a  reason: collision with root package name */
        public final Context f923a;

        /* renamed from: b  reason: collision with root package name */
        public final LayoutInflater f924b;

        /* renamed from: d  reason: collision with root package name */
        public Drawable f926d;

        /* renamed from: f  reason: collision with root package name */
        public CharSequence f928f;

        /* renamed from: g  reason: collision with root package name */
        public View f929g;

        /* renamed from: h  reason: collision with root package name */
        public CharSequence f930h;

        /* renamed from: i  reason: collision with root package name */
        public CharSequence f931i;

        /* renamed from: j  reason: collision with root package name */
        public Drawable f932j;

        /* renamed from: k  reason: collision with root package name */
        public DialogInterface.OnClickListener f933k;

        /* renamed from: l  reason: collision with root package name */
        public CharSequence f934l;

        /* renamed from: m  reason: collision with root package name */
        public Drawable f935m;

        /* renamed from: n  reason: collision with root package name */
        public DialogInterface.OnClickListener f936n;

        /* renamed from: o  reason: collision with root package name */
        public CharSequence f937o;

        /* renamed from: p  reason: collision with root package name */
        public Drawable f938p;

        /* renamed from: q  reason: collision with root package name */
        public DialogInterface.OnClickListener f939q;

        /* renamed from: s  reason: collision with root package name */
        public DialogInterface.OnCancelListener f941s;

        /* renamed from: t  reason: collision with root package name */
        public DialogInterface.OnDismissListener f942t;

        /* renamed from: u  reason: collision with root package name */
        public DialogInterface.OnKeyListener f943u;

        /* renamed from: v  reason: collision with root package name */
        public CharSequence[] f944v;

        /* renamed from: w  reason: collision with root package name */
        public ListAdapter f945w;

        /* renamed from: x  reason: collision with root package name */
        public DialogInterface.OnClickListener f946x;

        /* renamed from: y  reason: collision with root package name */
        public int f947y;

        /* renamed from: z  reason: collision with root package name */
        public View f948z;

        /* renamed from: c  reason: collision with root package name */
        public int f925c = 0;

        /* renamed from: e  reason: collision with root package name */
        public int f927e = 0;
        public boolean E = false;
        public int I = -1;
        public boolean O = true;

        /* renamed from: r  reason: collision with root package name */
        public boolean f940r = true;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class a extends ArrayAdapter {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ RecycleListView f949d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Context context, int i10, int i11, CharSequence[] charSequenceArr, RecycleListView recycleListView) {
                super(context, i10, i11, charSequenceArr);
                this.f949d = recycleListView;
            }

            @Override // android.widget.ArrayAdapter, android.widget.Adapter
            public View getView(int i10, View view, ViewGroup viewGroup) {
                View view2 = super.getView(i10, view, viewGroup);
                boolean[] zArr = b.this.F;
                if (zArr != null && zArr[i10]) {
                    this.f949d.setItemChecked(i10, true);
                }
                return view2;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.appcompat.app.AlertController$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class C0014b extends CursorAdapter {

            /* renamed from: d  reason: collision with root package name */
            private final int f951d;

            /* renamed from: e  reason: collision with root package name */
            private final int f952e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ RecycleListView f953i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ AlertController f954o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0014b(Context context, Cursor cursor, boolean z10, RecycleListView recycleListView, AlertController alertController) {
                super(context, cursor, z10);
                this.f953i = recycleListView;
                this.f954o = alertController;
                Cursor cursor2 = getCursor();
                this.f951d = cursor2.getColumnIndexOrThrow(b.this.L);
                this.f952e = cursor2.getColumnIndexOrThrow(b.this.M);
            }

            @Override // android.widget.CursorAdapter
            public void bindView(View view, Context context, Cursor cursor) {
                ((CheckedTextView) view.findViewById(16908308)).setText(cursor.getString(this.f951d));
                RecycleListView recycleListView = this.f953i;
                int position = cursor.getPosition();
                boolean z10 = true;
                if (cursor.getInt(this.f952e) != 1) {
                    z10 = false;
                }
                recycleListView.setItemChecked(position, z10);
            }

            @Override // android.widget.CursorAdapter
            public View newView(Context context, Cursor cursor, ViewGroup viewGroup) {
                return b.this.f924b.inflate(this.f954o.M, viewGroup, false);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class c implements AdapterView.OnItemClickListener {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ AlertController f956d;

            c(AlertController alertController) {
                this.f956d = alertController;
            }

            @Override // android.widget.AdapterView.OnItemClickListener
            public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
                b.this.f946x.onClick(this.f956d.f895b, i10);
                if (!b.this.H) {
                    this.f956d.f895b.dismiss();
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class d implements AdapterView.OnItemClickListener {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ RecycleListView f958d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ AlertController f959e;

            d(RecycleListView recycleListView, AlertController alertController) {
                this.f958d = recycleListView;
                this.f959e = alertController;
            }

            @Override // android.widget.AdapterView.OnItemClickListener
            public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
                boolean[] zArr = b.this.F;
                if (zArr != null) {
                    zArr[i10] = this.f958d.isItemChecked(i10);
                }
                b.this.J.onClick(this.f959e.f895b, i10, this.f958d.isItemChecked(i10));
            }
        }

        public b(Context context) {
            this.f923a = context;
            this.f924b = (LayoutInflater) context.getSystemService("layout_inflater");
        }

        private void b(AlertController alertController) {
            b bVar;
            AlertController alertController2;
            int i10;
            ListAdapter listAdapter;
            RecycleListView recycleListView = (RecycleListView) this.f924b.inflate(alertController.L, (ViewGroup) null);
            if (this.G) {
                if (this.K == null) {
                    bVar = this;
                    listAdapter = new a(this.f923a, alertController.M, 16908308, this.f944v, recycleListView);
                    recycleListView = recycleListView;
                    alertController2 = alertController;
                } else {
                    bVar = this;
                    alertController2 = alertController;
                    listAdapter = new C0014b(bVar.f923a, bVar.K, false, recycleListView, alertController2);
                }
            } else {
                bVar = this;
                alertController2 = alertController;
                if (bVar.H) {
                    i10 = alertController2.N;
                } else {
                    i10 = alertController2.O;
                }
                int i11 = i10;
                if (bVar.K != null) {
                    listAdapter = new SimpleCursorAdapter(bVar.f923a, i11, bVar.K, new String[]{bVar.L}, new int[]{16908308});
                } else {
                    listAdapter = bVar.f945w;
                    if (listAdapter == null) {
                        listAdapter = new d(bVar.f923a, i11, 16908308, bVar.f944v);
                    }
                }
            }
            alertController2.H = listAdapter;
            alertController2.I = bVar.I;
            if (bVar.f946x != null) {
                recycleListView.setOnItemClickListener(new c(alertController2));
            } else if (bVar.J != null) {
                recycleListView.setOnItemClickListener(new d(recycleListView, alertController2));
            }
            AdapterView.OnItemSelectedListener onItemSelectedListener = bVar.N;
            if (onItemSelectedListener != null) {
                recycleListView.setOnItemSelectedListener(onItemSelectedListener);
            }
            if (bVar.H) {
                recycleListView.setChoiceMode(1);
            } else if (bVar.G) {
                recycleListView.setChoiceMode(2);
            }
            alertController2.f900g = recycleListView;
        }

        public void a(AlertController alertController) {
            AlertController alertController2;
            View view = this.f929g;
            if (view != null) {
                alertController.l(view);
            } else {
                CharSequence charSequence = this.f928f;
                if (charSequence != null) {
                    alertController.q(charSequence);
                }
                Drawable drawable = this.f926d;
                if (drawable != null) {
                    alertController.n(drawable);
                }
                int i10 = this.f925c;
                if (i10 != 0) {
                    alertController.m(i10);
                }
                int i11 = this.f927e;
                if (i11 != 0) {
                    alertController.m(alertController.d(i11));
                }
            }
            CharSequence charSequence2 = this.f930h;
            if (charSequence2 != null) {
                alertController.o(charSequence2);
            }
            CharSequence charSequence3 = this.f931i;
            if (charSequence3 == null && this.f932j == null) {
                alertController2 = alertController;
            } else {
                alertController.k(-1, charSequence3, this.f933k, null, this.f932j);
                alertController2 = alertController;
            }
            CharSequence charSequence4 = this.f934l;
            if (charSequence4 != null || this.f935m != null) {
                alertController2.k(-2, charSequence4, this.f936n, null, this.f935m);
            }
            CharSequence charSequence5 = this.f937o;
            if (charSequence5 != null || this.f938p != null) {
                alertController2.k(-3, charSequence5, this.f939q, null, this.f938p);
            }
            if (this.f944v != null || this.K != null || this.f945w != null) {
                b(alertController2);
            }
            View view2 = this.f948z;
            if (view2 != null) {
                if (this.E) {
                    alertController2.t(view2, this.A, this.B, this.C, this.D);
                    return;
                } else {
                    alertController2.s(view2);
                    return;
                }
            }
            int i12 = this.f947y;
            if (i12 != 0) {
                alertController2.r(i12);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c extends Handler {

        /* renamed from: a  reason: collision with root package name */
        private WeakReference f961a;

        public c(DialogInterface dialogInterface) {
            this.f961a = new WeakReference(dialogInterface);
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            int i10 = message.what;
            if (i10 != -3 && i10 != -2 && i10 != -1) {
                if (i10 != 1) {
                    return;
                }
                ((DialogInterface) message.obj).dismiss();
                return;
            }
            ((DialogInterface.OnClickListener) message.obj).onClick((DialogInterface) this.f961a.get(), message.what);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends ArrayAdapter {
        public d(Context context, int i10, int i11, CharSequence[] charSequenceArr) {
            super(context, i10, i11, charSequenceArr);
        }

        @Override // android.widget.ArrayAdapter, android.widget.Adapter
        public long getItemId(int i10) {
            return i10;
        }

        @Override // android.widget.BaseAdapter, android.widget.Adapter
        public boolean hasStableIds() {
            return true;
        }
    }

    public AlertController(Context context, l lVar, Window window) {
        this.f894a = context;
        this.f895b = lVar;
        this.f896c = window;
        this.R = new c(lVar);
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(null, f.j.F, f.a.f24079k, 0);
        this.J = obtainStyledAttributes.getResourceId(f.j.G, 0);
        this.K = obtainStyledAttributes.getResourceId(f.j.I, 0);
        this.L = obtainStyledAttributes.getResourceId(f.j.K, 0);
        this.M = obtainStyledAttributes.getResourceId(f.j.L, 0);
        this.N = obtainStyledAttributes.getResourceId(f.j.N, 0);
        this.O = obtainStyledAttributes.getResourceId(f.j.J, 0);
        this.P = obtainStyledAttributes.getBoolean(f.j.M, true);
        this.f897d = obtainStyledAttributes.getDimensionPixelSize(f.j.H, 0);
        obtainStyledAttributes.recycle();
        lVar.j(1);
    }

    static boolean a(View view) {
        if (view.onCheckIsTextEditor()) {
            return true;
        }
        if (!(view instanceof ViewGroup)) {
            return false;
        }
        ViewGroup viewGroup = (ViewGroup) view;
        int childCount = viewGroup.getChildCount();
        while (childCount > 0) {
            childCount--;
            if (a(viewGroup.getChildAt(childCount))) {
                return true;
            }
        }
        return false;
    }

    private void b(Button button) {
        LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) button.getLayoutParams();
        layoutParams.gravity = 1;
        layoutParams.weight = 0.5f;
        button.setLayoutParams(layoutParams);
    }

    private ViewGroup i(View view, View view2) {
        if (view == null) {
            if (view2 instanceof ViewStub) {
                view2 = ((ViewStub) view2).inflate();
            }
            return (ViewGroup) view2;
        }
        if (view2 != null) {
            ViewParent parent = view2.getParent();
            if (parent instanceof ViewGroup) {
                ((ViewGroup) parent).removeView(view2);
            }
        }
        if (view instanceof ViewStub) {
            view = ((ViewStub) view).inflate();
        }
        return (ViewGroup) view;
    }

    private int j() {
        int i10 = this.K;
        if (i10 == 0) {
            return this.J;
        }
        if (this.Q == 1) {
            return i10;
        }
        return this.J;
    }

    private void p(ViewGroup viewGroup, View view, int i10, int i11) {
        View findViewById = this.f896c.findViewById(f.f.f24165w);
        View findViewById2 = this.f896c.findViewById(f.f.f24164v);
        h0.H0(view, i10, i11);
        if (findViewById != null) {
            viewGroup.removeView(findViewById);
        }
        if (findViewById2 != null) {
            viewGroup.removeView(findViewById2);
        }
    }

    private void u(ViewGroup viewGroup) {
        boolean z10;
        Button button = (Button) viewGroup.findViewById(16908313);
        this.f908o = button;
        button.setOnClickListener(this.S);
        if (TextUtils.isEmpty(this.f909p) && this.f911r == null) {
            this.f908o.setVisibility(8);
            z10 = false;
        } else {
            this.f908o.setText(this.f909p);
            Drawable drawable = this.f911r;
            if (drawable != null) {
                int i10 = this.f897d;
                drawable.setBounds(0, 0, i10, i10);
                this.f908o.setCompoundDrawables(this.f911r, null, null, null);
            }
            this.f908o.setVisibility(0);
            z10 = true;
        }
        Button button2 = (Button) viewGroup.findViewById(16908314);
        this.f912s = button2;
        button2.setOnClickListener(this.S);
        if (TextUtils.isEmpty(this.f913t) && this.f915v == null) {
            this.f912s.setVisibility(8);
        } else {
            this.f912s.setText(this.f913t);
            Drawable drawable2 = this.f915v;
            if (drawable2 != null) {
                int i11 = this.f897d;
                drawable2.setBounds(0, 0, i11, i11);
                this.f912s.setCompoundDrawables(this.f915v, null, null, null);
            }
            this.f912s.setVisibility(0);
            z10 |= true;
        }
        Button button3 = (Button) viewGroup.findViewById(16908315);
        this.f916w = button3;
        button3.setOnClickListener(this.S);
        if (TextUtils.isEmpty(this.f917x) && this.f919z == null) {
            this.f916w.setVisibility(8);
        } else {
            this.f916w.setText(this.f917x);
            Drawable drawable3 = this.f919z;
            if (drawable3 != null) {
                int i12 = this.f897d;
                drawable3.setBounds(0, 0, i12, i12);
                this.f916w.setCompoundDrawables(this.f919z, null, null, null);
            }
            this.f916w.setVisibility(0);
            z10 |= true;
        }
        if (z(this.f894a)) {
            if (z10) {
                b(this.f908o);
            } else if (z10) {
                b(this.f912s);
            } else if (z10) {
                b(this.f916w);
            }
        }
        if (z10) {
            return;
        }
        viewGroup.setVisibility(8);
    }

    private void v(ViewGroup viewGroup) {
        NestedScrollView nestedScrollView = (NestedScrollView) this.f896c.findViewById(f.f.f24166x);
        this.A = nestedScrollView;
        nestedScrollView.setFocusable(false);
        this.A.setNestedScrollingEnabled(false);
        TextView textView = (TextView) viewGroup.findViewById(16908299);
        this.F = textView;
        if (textView == null) {
            return;
        }
        CharSequence charSequence = this.f899f;
        if (charSequence != null) {
            textView.setText(charSequence);
            return;
        }
        textView.setVisibility(8);
        this.A.removeView(this.F);
        if (this.f900g != null) {
            ViewGroup viewGroup2 = (ViewGroup) this.A.getParent();
            int indexOfChild = viewGroup2.indexOfChild(this.A);
            viewGroup2.removeViewAt(indexOfChild);
            viewGroup2.addView(this.f900g, indexOfChild, new ViewGroup.LayoutParams(-1, -1));
            return;
        }
        viewGroup.setVisibility(8);
    }

    private void w(ViewGroup viewGroup) {
        View view = this.f901h;
        boolean z10 = false;
        if (view == null) {
            if (this.f902i != 0) {
                view = LayoutInflater.from(this.f894a).inflate(this.f902i, viewGroup, false);
            } else {
                view = null;
            }
        }
        if (view != null) {
            z10 = true;
        }
        if (!z10 || !a(view)) {
            this.f896c.setFlags(131072, 131072);
        }
        if (z10) {
            FrameLayout frameLayout = (FrameLayout) this.f896c.findViewById(f.f.f24157o);
            frameLayout.addView(view, new ViewGroup.LayoutParams(-1, -1));
            if (this.f907n) {
                frameLayout.setPadding(this.f903j, this.f904k, this.f905l, this.f906m);
            }
            if (this.f900g != null) {
                ((LinearLayout.LayoutParams) ((i0.a) viewGroup.getLayoutParams())).weight = 0.0f;
                return;
            }
            return;
        }
        viewGroup.setVisibility(8);
    }

    private void x(ViewGroup viewGroup) {
        if (this.G != null) {
            viewGroup.addView(this.G, 0, new ViewGroup.LayoutParams(-1, -2));
            this.f896c.findViewById(f.f.P).setVisibility(8);
            return;
        }
        this.D = (ImageView) this.f896c.findViewById(16908294);
        if (!TextUtils.isEmpty(this.f898e) && this.P) {
            TextView textView = (TextView) this.f896c.findViewById(f.f.f24153k);
            this.E = textView;
            textView.setText(this.f898e);
            int i10 = this.B;
            if (i10 != 0) {
                this.D.setImageResource(i10);
                return;
            }
            Drawable drawable = this.C;
            if (drawable != null) {
                this.D.setImageDrawable(drawable);
                return;
            }
            this.E.setPadding(this.D.getPaddingLeft(), this.D.getPaddingTop(), this.D.getPaddingRight(), this.D.getPaddingBottom());
            this.D.setVisibility(8);
            return;
        }
        this.f896c.findViewById(f.f.P).setVisibility(8);
        this.D.setVisibility(8);
        viewGroup.setVisibility(8);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private void y() {
        boolean z10;
        boolean z11;
        boolean z12;
        View findViewById;
        ListAdapter listAdapter;
        View findViewById2;
        View findViewById3;
        View findViewById4 = this.f896c.findViewById(f.f.f24163u);
        View findViewById5 = findViewById4.findViewById(f.f.Q);
        View findViewById6 = findViewById4.findViewById(f.f.f24156n);
        View findViewById7 = findViewById4.findViewById(f.f.f24154l);
        ViewGroup viewGroup = (ViewGroup) findViewById4.findViewById(f.f.f24158p);
        w(viewGroup);
        View findViewById8 = viewGroup.findViewById(f.f.Q);
        View findViewById9 = viewGroup.findViewById(f.f.f24156n);
        View findViewById10 = viewGroup.findViewById(f.f.f24154l);
        ViewGroup i10 = i(findViewById8, findViewById5);
        ViewGroup i11 = i(findViewById9, findViewById6);
        ViewGroup i12 = i(findViewById10, findViewById7);
        v(i11);
        u(i12);
        x(i10);
        int i13 = 0;
        if (viewGroup.getVisibility() != 8) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i10 != null && i10.getVisibility() != 8) {
            z11 = 1;
        } else {
            z11 = false;
        }
        if (i12 != null && i12.getVisibility() != 8) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (!z12 && i11 != null && (findViewById3 = i11.findViewById(f.f.L)) != null) {
            findViewById3.setVisibility(0);
        }
        if (z11) {
            NestedScrollView nestedScrollView = this.A;
            if (nestedScrollView != null) {
                nestedScrollView.setClipToPadding(true);
            }
            if (this.f899f == null && this.f900g == null) {
                findViewById2 = null;
            } else {
                findViewById2 = i10.findViewById(f.f.O);
            }
            if (findViewById2 != null) {
                findViewById2.setVisibility(0);
            }
        } else if (i11 != null && (findViewById = i11.findViewById(f.f.M)) != null) {
            findViewById.setVisibility(0);
        }
        ListView listView = this.f900g;
        if (listView instanceof RecycleListView) {
            ((RecycleListView) listView).a(z11, z12);
        }
        if (!z10) {
            View view = this.f900g;
            if (view == null) {
                view = this.A;
            }
            if (view != null) {
                if (z12) {
                    i13 = 2;
                }
                p(i11, view, z11 | i13, 3);
            }
        }
        ListView listView2 = this.f900g;
        if (listView2 != null && (listAdapter = this.H) != null) {
            listView2.setAdapter(listAdapter);
            int i14 = this.I;
            if (i14 > -1) {
                listView2.setItemChecked(i14, true);
                listView2.setSelection(i14);
            }
        }
    }

    private static boolean z(Context context) {
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(f.a.f24078j, typedValue, true);
        if (typedValue.data != 0) {
            return true;
        }
        return false;
    }

    public Button c(int i10) {
        if (i10 != -3) {
            if (i10 != -2) {
                if (i10 != -1) {
                    return null;
                }
                return this.f908o;
            }
            return this.f912s;
        }
        return this.f916w;
    }

    public int d(int i10) {
        TypedValue typedValue = new TypedValue();
        this.f894a.getTheme().resolveAttribute(i10, typedValue, true);
        return typedValue.resourceId;
    }

    public ListView e() {
        return this.f900g;
    }

    public void f() {
        this.f895b.setContentView(j());
        y();
    }

    public boolean g(int i10, KeyEvent keyEvent) {
        NestedScrollView nestedScrollView = this.A;
        if (nestedScrollView != null && nestedScrollView.n(keyEvent)) {
            return true;
        }
        return false;
    }

    public boolean h(int i10, KeyEvent keyEvent) {
        NestedScrollView nestedScrollView = this.A;
        if (nestedScrollView != null && nestedScrollView.n(keyEvent)) {
            return true;
        }
        return false;
    }

    public void k(int i10, CharSequence charSequence, DialogInterface.OnClickListener onClickListener, Message message, Drawable drawable) {
        if (message == null && onClickListener != null) {
            message = this.R.obtainMessage(i10, onClickListener);
        }
        if (i10 != -3) {
            if (i10 != -2) {
                if (i10 == -1) {
                    this.f909p = charSequence;
                    this.f910q = message;
                    this.f911r = drawable;
                    return;
                }
                throw new IllegalArgumentException("Button does not exist");
            }
            this.f913t = charSequence;
            this.f914u = message;
            this.f915v = drawable;
            return;
        }
        this.f917x = charSequence;
        this.f918y = message;
        this.f919z = drawable;
    }

    public void l(View view) {
        this.G = view;
    }

    public void m(int i10) {
        this.C = null;
        this.B = i10;
        ImageView imageView = this.D;
        if (imageView != null) {
            if (i10 != 0) {
                imageView.setVisibility(0);
                this.D.setImageResource(this.B);
                return;
            }
            imageView.setVisibility(8);
        }
    }

    public void n(Drawable drawable) {
        this.C = drawable;
        this.B = 0;
        ImageView imageView = this.D;
        if (imageView != null) {
            if (drawable != null) {
                imageView.setVisibility(0);
                this.D.setImageDrawable(drawable);
                return;
            }
            imageView.setVisibility(8);
        }
    }

    public void o(CharSequence charSequence) {
        this.f899f = charSequence;
        TextView textView = this.F;
        if (textView != null) {
            textView.setText(charSequence);
        }
    }

    public void q(CharSequence charSequence) {
        this.f898e = charSequence;
        TextView textView = this.E;
        if (textView != null) {
            textView.setText(charSequence);
        }
    }

    public void r(int i10) {
        this.f901h = null;
        this.f902i = i10;
        this.f907n = false;
    }

    public void s(View view) {
        this.f901h = view;
        this.f902i = 0;
        this.f907n = false;
    }

    public void t(View view, int i10, int i11, int i12, int i13) {
        this.f901h = view;
        this.f902i = 0;
        this.f907n = true;
        this.f903j = i10;
        this.f904k = i11;
        this.f905l = i12;
        this.f906m = i13;
    }
}
