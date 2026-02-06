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
    private qh.g I;
    private Button J;
    private boolean K;
    private CharSequence L;
    private CharSequence M;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f14921d = new LinkedHashSet();

    /* renamed from: e  reason: collision with root package name */
    private final LinkedHashSet f14922e = new LinkedHashSet();

    /* renamed from: i  reason: collision with root package name */
    private final LinkedHashSet f14923i = new LinkedHashSet();

    /* renamed from: o  reason: collision with root package name */
    private final LinkedHashSet f14924o = new LinkedHashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f14925p;

    /* renamed from: q  reason: collision with root package name */
    private q f14926q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.material.datepicker.a f14927r;

    /* renamed from: s  reason: collision with root package name */
    private i f14928s;

    /* renamed from: t  reason: collision with root package name */
    private int f14929t;

    /* renamed from: u  reason: collision with root package name */
    private CharSequence f14930u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f14931v;

    /* renamed from: w  reason: collision with root package name */
    private int f14932w;

    /* renamed from: x  reason: collision with root package name */
    private int f14933x;

    /* renamed from: y  reason: collision with root package name */
    private CharSequence f14934y;

    /* renamed from: z  reason: collision with root package name */
    private int f14935z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements v {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f14936d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f14937e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f14938i;

        a(int i10, View view, int i11) {
            this.f14936d = i10;
            this.f14937e = view;
            this.f14938i = i11;
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            int i10 = windowInsetsCompat.f(WindowInsetsCompat.p.h()).f3605b;
            if (this.f14936d >= 0) {
                this.f14937e.getLayoutParams().height = this.f14936d + i10;
                View view2 = this.f14937e;
                view2.setLayoutParams(view2.getLayoutParams());
            }
            View view3 = this.f14937e;
            view3.setPadding(view3.getPaddingLeft(), this.f14938i + i10, this.f14937e.getPaddingRight(), this.f14937e.getPaddingBottom());
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
        stateListDrawable.addState(new int[]{16842912}, g.a.b(context, ah.e.f711c));
        stateListDrawable.addState(new int[0], g.a.b(context, ah.e.f712d));
        return stateListDrawable;
    }

    private void B(Window window) {
        if (this.K) {
            return;
        }
        View findViewById = requireView().findViewById(ah.f.f728i);
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
        int dimensionPixelOffset = resources.getDimensionPixelOffset(ah.d.L);
        int i10 = m.f().f14947o;
        return (dimensionPixelOffset * 2) + (resources.getDimensionPixelSize(ah.d.N) * i10) + ((i10 - 1) * resources.getDimensionPixelOffset(ah.d.Q));
    }

    private int H(Context context) {
        int i10 = this.f14925p;
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
        if (this.f14932w != 0) {
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
        return M(context, ah.b.T);
    }

    static boolean M(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(nh.b.d(context, ah.b.f664z, i.class.getCanonicalName()), new int[]{i10});
        boolean z10 = obtainStyledAttributes.getBoolean(0, false);
        obtainStyledAttributes.recycle();
        return z10;
    }

    private void N() {
        int H = H(requireContext());
        C();
        i N2 = i.N(null, H, this.f14927r, null);
        this.f14928s = N2;
        q qVar = N2;
        if (this.f14932w == 1) {
            C();
            qVar = l.z(null, H, this.f14927r);
        }
        this.f14926q = qVar;
        P();
        O(F());
        FragmentTransaction r10 = getChildFragmentManager().r();
        r10.n(ah.f.f745z, this.f14926q);
        r10.i();
        this.f14926q.x(new b());
    }

    private void P() {
        CharSequence charSequence;
        TextView textView = this.F;
        if (this.f14932w == 1 && K()) {
            charSequence = this.M;
        } else {
            charSequence = this.L;
        }
        textView.setText(charSequence);
    }

    private void Q(CheckableImageButton checkableImageButton) {
        String string;
        if (this.f14932w == 1) {
            string = checkableImageButton.getContext().getString(ah.i.f791r);
        } else {
            string = checkableImageButton.getContext().getString(ah.i.f793t);
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
        Iterator it = this.f14923i.iterator();
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
        this.f14925p = bundle.getInt("OVERRIDE_THEME_RES_ID");
        android.support.v4.media.session.b.a(bundle.getParcelable("DATE_SELECTOR_KEY"));
        this.f14927r = (com.google.android.material.datepicker.a) bundle.getParcelable("CALENDAR_CONSTRAINTS_KEY");
        android.support.v4.media.session.b.a(bundle.getParcelable("DAY_VIEW_DECORATOR_KEY"));
        this.f14929t = bundle.getInt("TITLE_TEXT_RES_ID_KEY");
        this.f14930u = bundle.getCharSequence("TITLE_TEXT_KEY");
        this.f14932w = bundle.getInt("INPUT_MODE_KEY");
        this.f14933x = bundle.getInt("POSITIVE_BUTTON_TEXT_RES_ID_KEY");
        this.f14934y = bundle.getCharSequence("POSITIVE_BUTTON_TEXT_KEY");
        this.f14935z = bundle.getInt("POSITIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY");
        this.A = bundle.getCharSequence("POSITIVE_BUTTON_CONTENT_DESCRIPTION_KEY");
        this.B = bundle.getInt("NEGATIVE_BUTTON_TEXT_RES_ID_KEY");
        this.C = bundle.getCharSequence("NEGATIVE_BUTTON_TEXT_KEY");
        this.D = bundle.getInt("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY");
        this.E = bundle.getCharSequence("NEGATIVE_BUTTON_CONTENT_DESCRIPTION_KEY");
        CharSequence charSequence = this.f14930u;
        if (charSequence == null) {
            charSequence = requireContext().getResources().getText(this.f14929t);
        }
        this.L = charSequence;
        this.M = D(charSequence);
    }

    @Override // androidx.fragment.app.DialogFragment
    public final Dialog onCreateDialog(Bundle bundle) {
        Dialog dialog = new Dialog(requireContext(), H(requireContext()));
        Context context = dialog.getContext();
        this.f14931v = J(context);
        this.I = new qh.g(context, null, ah.b.f664z, ah.j.f818v);
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(null, ah.k.f965o3, ah.b.f664z, ah.j.f818v);
        int color = obtainStyledAttributes.getColor(ah.k.f974p3, 0);
        obtainStyledAttributes.recycle();
        this.I.N(context);
        this.I.X(ColorStateList.valueOf(color));
        this.I.W(h0.u(dialog.getWindow().getDecorView()));
        return dialog;
    }

    @Override // androidx.fragment.app.Fragment
    public final View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        int i10;
        if (this.f14931v) {
            i10 = ah.h.f773w;
        } else {
            i10 = ah.h.f772v;
        }
        View inflate = layoutInflater.inflate(i10, viewGroup);
        Context context = inflate.getContext();
        if (this.f14931v) {
            inflate.findViewById(ah.f.f745z).setLayoutParams(new LinearLayout.LayoutParams(G(context), -2));
        } else {
            inflate.findViewById(ah.f.A).setLayoutParams(new LinearLayout.LayoutParams(G(context), -1));
        }
        TextView textView = (TextView) inflate.findViewById(ah.f.G);
        this.G = textView;
        h0.p0(textView, 1);
        this.H = (CheckableImageButton) inflate.findViewById(ah.f.H);
        this.F = (TextView) inflate.findViewById(ah.f.I);
        I(context);
        this.J = (Button) inflate.findViewById(ah.f.f723d);
        C();
        throw null;
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnDismissListener
    public final void onDismiss(DialogInterface dialogInterface) {
        Iterator it = this.f14924o.iterator();
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
        bundle.putInt("OVERRIDE_THEME_RES_ID", this.f14925p);
        bundle.putParcelable("DATE_SELECTOR_KEY", null);
        a.b bVar = new a.b(this.f14927r);
        i iVar = this.f14928s;
        if (iVar == null) {
            I = null;
        } else {
            I = iVar.I();
        }
        if (I != null) {
            bVar.b(I.f14949q);
        }
        bundle.putParcelable("CALENDAR_CONSTRAINTS_KEY", bVar.a());
        bundle.putParcelable("DAY_VIEW_DECORATOR_KEY", null);
        bundle.putInt("TITLE_TEXT_RES_ID_KEY", this.f14929t);
        bundle.putCharSequence("TITLE_TEXT_KEY", this.f14930u);
        bundle.putInt("INPUT_MODE_KEY", this.f14932w);
        bundle.putInt("POSITIVE_BUTTON_TEXT_RES_ID_KEY", this.f14933x);
        bundle.putCharSequence("POSITIVE_BUTTON_TEXT_KEY", this.f14934y);
        bundle.putInt("POSITIVE_BUTTON_CONTENT_DESCRIPTION_RES_ID_KEY", this.f14935z);
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
        if (this.f14931v) {
            window.setLayout(-1, -1);
            window.setBackgroundDrawable(this.I);
            B(window);
        } else {
            window.setLayout(-2, -2);
            int dimensionPixelOffset = getResources().getDimensionPixelOffset(ah.d.P);
            Rect rect = new Rect(dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset);
            window.setBackgroundDrawable(new InsetDrawable((Drawable) this.I, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset));
            window.getDecorView().setOnTouchListener(new hh.a(requireDialog(), rect));
        }
        N();
    }

    @Override // androidx.fragment.app.DialogFragment, androidx.fragment.app.Fragment
    public void onStop() {
        this.f14926q.y();
        super.onStop();
    }
}
