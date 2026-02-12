package com.google.android.material.datepicker;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.StateListDrawable;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import androidx.core.view.w;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentTransaction;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.google.android.material.datepicker.a;
import com.google.android.material.internal.CheckableImageButton;
import java.util.Iterator;
import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k<S> extends DialogFragment {
    static final Object N = "CONFIRM_BUTTON_TAG";
    static final Object O = "CANCEL_BUTTON_TAG";
    static final Object P = "TOGGLE_BUTTON_TAG";
    private CharSequence A;
    private int B;
    private CharSequence C;
    private int D;
    private CharSequence E;
    private TextView F;
    private TextView G;
    private CheckableImageButton H;
    private th.h I;
    private Button J;
    private boolean K;
    private CharSequence L;
    private CharSequence M;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f15679d = new LinkedHashSet();

    /* renamed from: e  reason: collision with root package name */
    private final LinkedHashSet f15680e = new LinkedHashSet();

    /* renamed from: i  reason: collision with root package name */
    private final LinkedHashSet f15681i = new LinkedHashSet();

    /* renamed from: o  reason: collision with root package name */
    private final LinkedHashSet f15682o = new LinkedHashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f15683p;

    /* renamed from: q  reason: collision with root package name */
    private q f15684q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.material.datepicker.a f15685r;

    /* renamed from: s  reason: collision with root package name */
    private i f15686s;

    /* renamed from: t  reason: collision with root package name */
    private int f15687t;

    /* renamed from: u  reason: collision with root package name */
    private CharSequence f15688u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f15689v;

    /* renamed from: w  reason: collision with root package name */
    private int f15690w;

    /* renamed from: x  reason: collision with root package name */
    private int f15691x;

    /* renamed from: y  reason: collision with root package name */
    private CharSequence f15692y;

    /* renamed from: z  reason: collision with root package name */
    private int f15693z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements w {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f15694d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f15695e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f15696i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f15697o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ int f15698p;

        a(int i10, View view, int i11, int i12, int i13) {
            this.f15694d = i10;
            this.f15695e = view;
            this.f15696i = i11;
            this.f15697o = i12;
            this.f15698p = i13;
        }

        @Override // androidx.core.view.w
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            Insets f10 = windowInsetsCompat.f(WindowInsetsCompat.p.h());
            if (this.f15694d >= 0) {
                this.f15695e.getLayoutParams().height = this.f15694d + f10.f3305b;
                View view2 = this.f15695e;
                view2.setLayoutParams(view2.getLayoutParams());
            }
            View view3 = this.f15695e;
            view3.setPadding(this.f15696i + f10.f3304a, this.f15697o + f10.f3305b, this.f15698p + f10.f3306c, view3.getPaddingBottom());
            return windowInsetsCompat;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends p {
        b() {
        }
    }

    private static Drawable A(Context context) {
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842912}, g.a.b(context, bh.e.f6828c));
        stateListDrawable.addState(new int[0], g.a.b(context, bh.e.f6829d));
        return stateListDrawable;
    }

    private void B(Window window) {
        if (this.K) {
            return;
        }
        View findViewById = requireView().findViewById(bh.f.f6850i);
        com.google.android.material.internal.c.a(window, true, com.google.android.material.internal.p.e(findViewById), null);
        int paddingTop = findViewById.getPaddingTop();
        i0.x0(findViewById, new a(findViewById.getLayoutParams().height, findViewById, findViewById.getPaddingLeft(), paddingTop, findViewById.getPaddingRight()));
        this.K = true;
    }

    private d C() {
        android.support.v4.media.session.b.a(getArguments().getParcelable("DATE_SELECTOR_KEY"));
        return null;
    }

    private static CharSequence D(CharSequence charSequence) {
        if (charSequence != null) {
            String[] split = TextUtils.split(String.valueOf(charSequence), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            if (split.length > 1) {
                return split[0];
            }
            return charSequence;
        }
        return null;
    }

    private String E() {
        C();
        requireContext();
        throw null;
    }

    private static int G(Context context) {
        Resources resources = context.getResources();
        int dimensionPixelOffset = resources.getDimensionPixelOffset(bh.d.f6779c0);
        int i10 = m.f().f15707o;
        return (dimensionPixelOffset * 2) + (resources.getDimensionPixelSize(bh.d.f6783e0) * i10) + ((i10 - 1) * resources.getDimensionPixelOffset(bh.d.f6789h0));
    }

    private int H(Context context) {
        int i10 = this.f15683p;
        if (i10 != 0) {
            return i10;
        }
        C();
        throw null;
    }

    private void I(Context context) {
        boolean z10;
        this.H.setTag(P);
        this.H.setImageDrawable(A(context));
        CheckableImageButton checkableImageButton = this.H;
        if (this.f15690w != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        checkableImageButton.setChecked(z10);
        i0.k0(this.H, null);
        Q(this.H);
        this.H.setOnClickListener(new View.OnClickListener() { // from class: com.google.android.material.datepicker.j
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.z(k.this, view);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean J(Context context) {
        return M(context, 16843277);
    }

    private boolean K() {
        if (getResources().getConfiguration().orientation == 2) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean L(Context context) {
        return M(context, bh.b.Y);
    }

    static boolean M(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(qh.b.f(context, bh.b.B, i.class.getCanonicalName()), new int[]{i10});
        boolean z10 = obtainStyledAttributes.getBoolean(0, false);
        obtainStyledAttributes.recycle();
        return z10;
    }

    private void N() {
        int H = H(requireContext());
        C();
        i P2 = i.P(null, H, this.f15685r, null);
        this.f15686s = P2;
        q qVar = P2;
        if (this.f15690w == 1) {
            C();
            qVar = l.z(null, H, this.f15685r);
        }
        this.f15684q = qVar;
        P();
        O(F());
        FragmentTransaction s10 = getChildFragmentManager().s();
        s10.o(bh.f.f6867z, this.f15684q);
        s10.j();
        this.f15684q.x(new b());
    }

    private void P() {
        CharSequence charSequence;
        TextView textView = this.F;
        if (this.f15690w == 1 && K()) {
            charSequence = this.M;
        } else {
            charSequence = this.L;
        }
        textView.setText(charSequence);
    }

    private void Q(CheckableImageButton checkableImageButton) {
        String string;
        if (this.f15690w == 1) {
            string = checkableImageButton.getContext().getString(bh.j.f6922w);
        } else {
            string = checkableImageButton.getContext().getString(bh.j.f6924y);
        }
        this.H.setContentDescription(string);
    }

    public static /* synthetic */ void z(k kVar, View view) {
        kVar.C();
        throw null;
    }

    public String F() {
        C();
        getContext();
        throw null;
    }

    void O(String str) {
        this.G.setContentDescription(E());
        this.G.setText(str);
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnCancelListener
    public final void onCancel(DialogInterface dialogInterface) {
        Iterator it = this.f15681i.iterator();
        while (it.hasNext()) {
            ((DialogInterface.OnCancelListener) it.next()).onCancel(dialogInterface);
        }
        super.onCancel(dialogInterface);
    }

    @Override // androidx.fragment.app.DialogFragment, androidx.fragment.app.Fragment
    public final void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        if (bundle == null) {
            bundle = getArguments();
        }
        this.f15683p = bundle.getInt("OVERRIDE_THEME_RES_ID");
        android.support.v4.media.session.b.a(bundle.getParcelable("DATE_SELECTOR_KEY"));
        this.f15685r = (com.google.android.material.datepicker.a) bundle.getParcelable("CALENDAR_CONSTRAINTS_KEY");
        android.support.v4.media.session.b.a(bundle.getParcelable("DAY_VIEW_DECORATOR_KEY"));
        this.f15687t = bundle.getInt("TITLE_TEXT_RES_ID_KEY");
        this.f15688u = bundle.getCharSequence("TITLE_TEXT_KEY");
        this.f15690w = bundle.getInt("INPUT_MODE_KEY");
        this.f15691x = bundle.getInt("POSITIVE_BUTTON_TEXT_RES_ID_KEY");
        this.f15692y = bundle.getCharSequence("POSITIVE_BUTTON_TEXT_KEY");
        this.f15693z = bundle.getInt("POSITIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY");
        this.A = bundle.getCharSequence("POSITIVE_BUTTON_CONTENT_DESCRIPTION_KEY");
        this.B = bundle.getInt("NEGATIVE_BUTTON_TEXT_RES_ID_KEY");
        this.C = bundle.getCharSequence("NEGATIVE_BUTTON_TEXT_KEY");
        this.D = bundle.getInt("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY");
        this.E = bundle.getCharSequence("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_KEY");
        CharSequence charSequence = this.f15688u;
        if (charSequence == null) {
            charSequence = requireContext().getResources().getText(this.f15687t);
        }
        this.L = charSequence;
        this.M = D(charSequence);
    }

    @Override // androidx.fragment.app.DialogFragment
    public final Dialog onCreateDialog(Bundle bundle) {
        Dialog dialog = new Dialog(requireContext(), H(requireContext()));
        Context context = dialog.getContext();
        this.f15689v = J(context);
        this.I = new th.h(context, null, bh.b.B, bh.k.B);
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(null, bh.l.f7133s3, bh.b.B, bh.k.B);
        int color = obtainStyledAttributes.getColor(bh.l.f7142t3, 0);
        obtainStyledAttributes.recycle();
        this.I.T(context);
        this.I.f0(ColorStateList.valueOf(color));
        this.I.e0(dialog.getWindow().getDecorView().getElevation());
        return dialog;
    }

    @Override // androidx.fragment.app.Fragment
    public final View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        int i10;
        if (this.f15689v) {
            i10 = bh.h.f6898z;
        } else {
            i10 = bh.h.f6897y;
        }
        View inflate = layoutInflater.inflate(i10, viewGroup);
        Context context = inflate.getContext();
        if (this.f15689v) {
            inflate.findViewById(bh.f.f6867z).setLayoutParams(new LinearLayout.LayoutParams(G(context), -2));
        } else {
            inflate.findViewById(bh.f.A).setLayoutParams(new LinearLayout.LayoutParams(G(context), -1));
        }
        TextView textView = (TextView) inflate.findViewById(bh.f.G);
        this.G = textView;
        textView.setAccessibilityLiveRegion(1);
        this.H = (CheckableImageButton) inflate.findViewById(bh.f.H);
        this.F = (TextView) inflate.findViewById(bh.f.I);
        I(context);
        this.J = (Button) inflate.findViewById(bh.f.f6843d);
        C();
        throw null;
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnDismissListener
    public final void onDismiss(DialogInterface dialogInterface) {
        Iterator it = this.f15682o.iterator();
        while (it.hasNext()) {
            ((DialogInterface.OnDismissListener) it.next()).onDismiss(dialogInterface);
        }
        ViewGroup viewGroup = (ViewGroup) getView();
        if (viewGroup != null) {
            viewGroup.removeAllViews();
        }
        super.onDismiss(dialogInterface);
    }

    @Override // androidx.fragment.app.DialogFragment, androidx.fragment.app.Fragment
    public final void onSaveInstanceState(Bundle bundle) {
        m K;
        super.onSaveInstanceState(bundle);
        bundle.putInt("OVERRIDE_THEME_RES_ID", this.f15683p);
        bundle.putParcelable("DATE_SELECTOR_KEY", null);
        a.b bVar = new a.b(this.f15685r);
        i iVar = this.f15686s;
        if (iVar == null) {
            K = null;
        } else {
            K = iVar.K();
        }
        if (K != null) {
            bVar.b(K.f15709q);
        }
        bundle.putParcelable("CALENDAR_CONSTRAINTS_KEY", bVar.a());
        bundle.putParcelable("DAY_VIEW_DECORATOR_KEY", null);
        bundle.putInt("TITLE_TEXT_RES_ID_KEY", this.f15687t);
        bundle.putCharSequence("TITLE_TEXT_KEY", this.f15688u);
        bundle.putInt("INPUT_MODE_KEY", this.f15690w);
        bundle.putInt("POSITIVE_BUTTON_TEXT_RES_ID_KEY", this.f15691x);
        bundle.putCharSequence("POSITIVE_BUTTON_TEXT_KEY", this.f15692y);
        bundle.putInt("POSITIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY", this.f15693z);
        bundle.putCharSequence("POSITIVE_BUTTON_CONTENT_DESCRIPTION_KEY", this.A);
        bundle.putInt("NEGATIVE_BUTTON_TEXT_RES_ID_KEY", this.B);
        bundle.putCharSequence("NEGATIVE_BUTTON_TEXT_KEY", this.C);
        bundle.putInt("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY", this.D);
        bundle.putCharSequence("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_KEY", this.E);
    }

    @Override // androidx.fragment.app.DialogFragment, androidx.fragment.app.Fragment
    public void onStart() {
        super.onStart();
        Window window = requireDialog().getWindow();
        if (this.f15689v) {
            window.setLayout(-1, -1);
            window.setBackgroundDrawable(this.I);
            B(window);
        } else {
            window.setLayout(-2, -2);
            int dimensionPixelOffset = getResources().getDimensionPixelOffset(bh.d.f6787g0);
            Rect rect = new Rect(dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset);
            window.setBackgroundDrawable(new InsetDrawable((Drawable) this.I, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset));
            window.getDecorView().setOnTouchListener(new kh.a(requireDialog(), rect));
        }
        N();
    }

    @Override // androidx.fragment.app.DialogFragment, androidx.fragment.app.Fragment
    public void onStop() {
        this.f15684q.y();
        super.onStop();
    }
}
