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
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentTransaction;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.google.android.material.datepicker.a;
import com.google.android.material.internal.CheckableImageButton;
import java.util.Iterator;
import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k<S> extends DialogFragment {
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
    private oh.g I;
    private Button J;
    private boolean K;
    private CharSequence L;
    private CharSequence M;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f15950d = new LinkedHashSet();

    /* renamed from: e  reason: collision with root package name */
    private final LinkedHashSet f15951e = new LinkedHashSet();

    /* renamed from: i  reason: collision with root package name */
    private final LinkedHashSet f15952i = new LinkedHashSet();

    /* renamed from: o  reason: collision with root package name */
    private final LinkedHashSet f15953o = new LinkedHashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f15954p;

    /* renamed from: q  reason: collision with root package name */
    private q f15955q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.material.datepicker.a f15956r;

    /* renamed from: s  reason: collision with root package name */
    private i f15957s;

    /* renamed from: t  reason: collision with root package name */
    private int f15958t;

    /* renamed from: u  reason: collision with root package name */
    private CharSequence f15959u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f15960v;

    /* renamed from: w  reason: collision with root package name */
    private int f15961w;

    /* renamed from: x  reason: collision with root package name */
    private int f15962x;

    /* renamed from: y  reason: collision with root package name */
    private CharSequence f15963y;

    /* renamed from: z  reason: collision with root package name */
    private int f15964z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements v {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f15965d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f15966e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f15967i;

        a(int i10, View view, int i11) {
            this.f15965d = i10;
            this.f15966e = view;
            this.f15967i = i11;
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            int i10 = windowInsetsCompat.f(WindowInsetsCompat.p.h()).f3151b;
            if (this.f15965d >= 0) {
                this.f15966e.getLayoutParams().height = this.f15965d + i10;
                View view2 = this.f15966e;
                view2.setLayoutParams(view2.getLayoutParams());
            }
            View view3 = this.f15966e;
            view3.setPadding(view3.getPaddingLeft(), this.f15967i + i10, this.f15966e.getPaddingRight(), this.f15966e.getPaddingBottom());
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
        stateListDrawable.addState(new int[]{16842912}, g.a.b(context, yg.e.f54412c));
        stateListDrawable.addState(new int[0], g.a.b(context, yg.e.f54413d));
        return stateListDrawable;
    }

    private void B(Window window) {
        if (this.K) {
            return;
        }
        View findViewById = requireView().findViewById(yg.f.f54429i);
        com.google.android.material.internal.c.a(window, true, com.google.android.material.internal.o.e(findViewById), null);
        h0.D0(findViewById, new a(findViewById.getLayoutParams().height, findViewById, findViewById.getPaddingTop()));
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
        int dimensionPixelOffset = resources.getDimensionPixelOffset(yg.d.L);
        int i10 = m.f().f15976o;
        return (dimensionPixelOffset * 2) + (resources.getDimensionPixelSize(yg.d.N) * i10) + ((i10 - 1) * resources.getDimensionPixelOffset(yg.d.Q));
    }

    private int H(Context context) {
        int i10 = this.f15954p;
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
        if (this.f15961w != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        checkableImageButton.setChecked(z10);
        h0.n0(this.H, null);
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
        return M(context, yg.b.T);
    }

    static boolean M(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(lh.b.d(context, yg.b.f54365z, i.class.getCanonicalName()), new int[]{i10});
        boolean z10 = obtainStyledAttributes.getBoolean(0, false);
        obtainStyledAttributes.recycle();
        return z10;
    }

    private void N() {
        int H = H(requireContext());
        C();
        i N2 = i.N(null, H, this.f15956r, null);
        this.f15957s = N2;
        q qVar = N2;
        if (this.f15961w == 1) {
            C();
            qVar = l.z(null, H, this.f15956r);
        }
        this.f15955q = qVar;
        P();
        O(F());
        FragmentTransaction r10 = getChildFragmentManager().r();
        r10.n(yg.f.f54446z, this.f15955q);
        r10.i();
        this.f15955q.x(new b());
    }

    private void P() {
        CharSequence charSequence;
        TextView textView = this.F;
        if (this.f15961w == 1 && K()) {
            charSequence = this.M;
        } else {
            charSequence = this.L;
        }
        textView.setText(charSequence);
    }

    private void Q(CheckableImageButton checkableImageButton) {
        String string;
        if (this.f15961w == 1) {
            string = checkableImageButton.getContext().getString(yg.i.f54492r);
        } else {
            string = checkableImageButton.getContext().getString(yg.i.f54494t);
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
        Iterator it = this.f15952i.iterator();
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
        this.f15954p = bundle.getInt("OVERRIDE_THEME_RES_ID");
        android.support.v4.media.session.b.a(bundle.getParcelable("DATE_SELECTOR_KEY"));
        this.f15956r = (com.google.android.material.datepicker.a) bundle.getParcelable("CALENDAR_CONSTRAINTS_KEY");
        android.support.v4.media.session.b.a(bundle.getParcelable("DAY_VIEW_DECORATOR_KEY"));
        this.f15958t = bundle.getInt("TITLE_TEXT_RES_ID_KEY");
        this.f15959u = bundle.getCharSequence("TITLE_TEXT_KEY");
        this.f15961w = bundle.getInt("INPUT_MODE_KEY");
        this.f15962x = bundle.getInt("POSITIVE_BUTTON_TEXT_RES_ID_KEY");
        this.f15963y = bundle.getCharSequence("POSITIVE_BUTTON_TEXT_KEY");
        this.f15964z = bundle.getInt("POSITIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY");
        this.A = bundle.getCharSequence("POSITIVE_BUTTON_CONTENT_DESCRIPTION_KEY");
        this.B = bundle.getInt("NEGATIVE_BUTTON_TEXT_RES_ID_KEY");
        this.C = bundle.getCharSequence("NEGATIVE_BUTTON_TEXT_KEY");
        this.D = bundle.getInt("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY");
        this.E = bundle.getCharSequence("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_KEY");
        CharSequence charSequence = this.f15959u;
        if (charSequence == null) {
            charSequence = requireContext().getResources().getText(this.f15958t);
        }
        this.L = charSequence;
        this.M = D(charSequence);
    }

    @Override // androidx.fragment.app.DialogFragment
    public final Dialog onCreateDialog(Bundle bundle) {
        Dialog dialog = new Dialog(requireContext(), H(requireContext()));
        Context context = dialog.getContext();
        this.f15960v = J(context);
        this.I = new oh.g(context, null, yg.b.f54365z, yg.j.f54519v);
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(null, yg.k.f54666o3, yg.b.f54365z, yg.j.f54519v);
        int color = obtainStyledAttributes.getColor(yg.k.f54675p3, 0);
        obtainStyledAttributes.recycle();
        this.I.N(context);
        this.I.X(ColorStateList.valueOf(color));
        this.I.W(h0.u(dialog.getWindow().getDecorView()));
        return dialog;
    }

    @Override // androidx.fragment.app.Fragment
    public final View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        int i10;
        if (this.f15960v) {
            i10 = yg.h.f54474w;
        } else {
            i10 = yg.h.f54473v;
        }
        View inflate = layoutInflater.inflate(i10, viewGroup);
        Context context = inflate.getContext();
        if (this.f15960v) {
            inflate.findViewById(yg.f.f54446z).setLayoutParams(new LinearLayout.LayoutParams(G(context), -2));
        } else {
            inflate.findViewById(yg.f.A).setLayoutParams(new LinearLayout.LayoutParams(G(context), -1));
        }
        TextView textView = (TextView) inflate.findViewById(yg.f.G);
        this.G = textView;
        h0.p0(textView, 1);
        this.H = (CheckableImageButton) inflate.findViewById(yg.f.H);
        this.F = (TextView) inflate.findViewById(yg.f.I);
        I(context);
        this.J = (Button) inflate.findViewById(yg.f.f54424d);
        C();
        throw null;
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnDismissListener
    public final void onDismiss(DialogInterface dialogInterface) {
        Iterator it = this.f15953o.iterator();
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
        m I;
        super.onSaveInstanceState(bundle);
        bundle.putInt("OVERRIDE_THEME_RES_ID", this.f15954p);
        bundle.putParcelable("DATE_SELECTOR_KEY", null);
        a.b bVar = new a.b(this.f15956r);
        i iVar = this.f15957s;
        if (iVar == null) {
            I = null;
        } else {
            I = iVar.I();
        }
        if (I != null) {
            bVar.b(I.f15978q);
        }
        bundle.putParcelable("CALENDAR_CONSTRAINTS_KEY", bVar.a());
        bundle.putParcelable("DAY_VIEW_DECORATOR_KEY", null);
        bundle.putInt("TITLE_TEXT_RES_ID_KEY", this.f15958t);
        bundle.putCharSequence("TITLE_TEXT_KEY", this.f15959u);
        bundle.putInt("INPUT_MODE_KEY", this.f15961w);
        bundle.putInt("POSITIVE_BUTTON_TEXT_RES_ID_KEY", this.f15962x);
        bundle.putCharSequence("POSITIVE_BUTTON_TEXT_KEY", this.f15963y);
        bundle.putInt("POSITIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY", this.f15964z);
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
        if (this.f15960v) {
            window.setLayout(-1, -1);
            window.setBackgroundDrawable(this.I);
            B(window);
        } else {
            window.setLayout(-2, -2);
            int dimensionPixelOffset = getResources().getDimensionPixelOffset(yg.d.P);
            Rect rect = new Rect(dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset);
            window.setBackgroundDrawable(new InsetDrawable((Drawable) this.I, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset));
            window.getDecorView().setOnTouchListener(new fh.a(requireDialog(), rect));
        }
        N();
    }

    @Override // androidx.fragment.app.DialogFragment, androidx.fragment.app.Fragment
    public void onStop() {
        this.f15955q.y();
        super.onStop();
    }
}
