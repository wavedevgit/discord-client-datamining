package ko;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t0 extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final List f31661a;

    /* renamed from: b  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f31662b;

    /* renamed from: c  reason: collision with root package name */
    private final NextStep.GovernmentId.AssetConfig.SelectPage f31663c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f31664d;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f31665e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f31666f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f31667g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31668a;

        static {
            int[] iArr = new int[g4.values().length];
            try {
                iArr[g4.f31304d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[g4.f31305e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[g4.f31306i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[g4.f31307o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f31668a = iArr;
        }
    }

    public t0(Context context, List data, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, Function1 onClick) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(onClick, "onClick");
        this.f31661a = data;
        this.f31662b = governmentIdStepStyle;
        this.f31663c = selectPage;
        this.f31664d = onClick;
        this.f31665e = new HashMap();
        this.f31666f = !sp.s.b(context, kp.a.f34904d, null, false, false, 14, null);
        this.f31667g = true;
    }

    private final void b(oo.e eVar) {
        Double governmentIdSelectOptionMinRowHeight;
        Integer backgroundColorValue;
        Integer chevronColor;
        TextBasedComponentStyle governmentIdVerticalOptionTextStyle;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f31662b;
        if (governmentIdStepStyle != null && (governmentIdVerticalOptionTextStyle = governmentIdStepStyle.getGovernmentIdVerticalOptionTextStyle()) != null) {
            TextView label = eVar.f42481e;
            Intrinsics.checkNotNullExpressionValue(label, "label");
            lq.f0.n(label, governmentIdVerticalOptionTextStyle, null, 2, null);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle2 = this.f31662b;
        if (governmentIdStepStyle2 != null && (chevronColor = governmentIdStepStyle2.getChevronColor()) != null) {
            eVar.f42478b.setColorFilter(chevronColor.intValue());
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle3 = this.f31662b;
        if (governmentIdStepStyle3 != null && (backgroundColorValue = governmentIdStepStyle3.getBackgroundColorValue()) != null) {
            int intValue = backgroundColorValue.intValue();
            Integer activeOptionBackgroundColorValue = this.f31662b.getActiveOptionBackgroundColorValue();
            if (activeOptionBackgroundColorValue != null) {
                eVar.getRoot().setBackground(new RippleDrawable(c(activeOptionBackgroundColorValue.intValue()), new ColorDrawable(intValue), null));
            }
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle4 = this.f31662b;
        if (governmentIdStepStyle4 != null && (governmentIdSelectOptionMinRowHeight = governmentIdStepStyle4.getGovernmentIdSelectOptionMinRowHeight()) != null) {
            eVar.f42482f.setMinHeight((int) sp.h.a(governmentIdSelectOptionMinRowHeight.doubleValue()));
        }
    }

    private final ColorStateList c(int i10) {
        return new ColorStateList(new int[][]{new int[0]}, new int[]{i10});
    }

    private final Drawable d(Context context, Integer num, Integer num2, Drawable drawable) {
        Drawable mutate;
        ArrayList arrayList = new ArrayList();
        if (num != null) {
            drawable.mutate().setTint(num.intValue());
        }
        Drawable b10 = g.a.b(context, l4.f31358e);
        if (num2 != null && b10 != null && (mutate = b10.mutate()) != null) {
            mutate.setTint(num2.intValue());
        }
        if (b10 != null) {
            arrayList.add(b10);
        }
        arrayList.add(drawable);
        return new LayerDrawable((Drawable[]) arrayList.toArray(new Drawable[0]));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(t0 t0Var, b0 b0Var, View view) {
        t0Var.f31664d.invoke(b0Var.b());
    }

    private final void h(oo.e eVar, Drawable drawable) {
        Integer num;
        Integer governmentIdIconFillColor;
        Integer governmentIdIconStrokeColor;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f31662b;
        Integer num2 = null;
        if (governmentIdStepStyle != null && (governmentIdIconStrokeColor = governmentIdStepStyle.getGovernmentIdIconStrokeColor()) != null) {
            num = Integer.valueOf(governmentIdIconStrokeColor.intValue());
        } else {
            num = null;
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle2 = this.f31662b;
        if (governmentIdStepStyle2 != null && (governmentIdIconFillColor = governmentIdStepStyle2.getGovernmentIdIconFillColor()) != null) {
            num2 = Integer.valueOf(governmentIdIconFillColor.intValue());
        }
        Context context = eVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable mutate = d(context, num, num2, drawable).mutate();
        Intrinsics.checkNotNullExpressionValue(mutate, "mutate(...)");
        eVar.f42479c.setImageDrawable(mutate);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: f */
    public sp.b0 onCreateViewHolder(ViewGroup parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        oo.e c10 = oo.e.c(LayoutInflater.from(parent.getContext()), parent, false);
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        sp.b0 b0Var = new sp.b0(c10);
        ViewBinding binding = b0Var.getBinding();
        Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
        b((oo.e) binding);
        return b0Var;
    }

    public final void g(boolean z10) {
        if (this.f31667g == z10) {
            return;
        }
        this.f31667g = z10;
        notifyDataSetChanged();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f31661a.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        RemoteImage iconPassport;
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final b0 b0Var = (b0) this.f31661a.get(i10);
        oo.e eVar = (oo.e) sp.c0.a(holder);
        eVar.f42481e.setText(b0Var.getName());
        g4 a10 = b0Var.a();
        int[] iArr = a.f31668a;
        int i12 = iArr[a10.ordinal()];
        View view = null;
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 != 3) {
                    if (i12 == 4) {
                        NextStep.GovernmentId.AssetConfig.SelectPage selectPage = this.f31663c;
                        if (selectPage == null || (iconPassport = selectPage.getIconNationalId()) == null) {
                            NextStep.GovernmentId.AssetConfig.SelectPage selectPage2 = this.f31663c;
                            if (selectPage2 != null) {
                                iconPassport = selectPage2.getIconGovernmentId();
                            }
                            iconPassport = null;
                        }
                    } else {
                        throw new rr.p();
                    }
                } else {
                    NextStep.GovernmentId.AssetConfig.SelectPage selectPage3 = this.f31663c;
                    if (selectPage3 != null) {
                        iconPassport = selectPage3.getIconDriversLicense();
                    }
                    iconPassport = null;
                }
            } else {
                NextStep.GovernmentId.AssetConfig.SelectPage selectPage4 = this.f31663c;
                if (selectPage4 != null) {
                    iconPassport = selectPage4.getIconGovernmentId();
                }
                iconPassport = null;
            }
        } else {
            NextStep.GovernmentId.AssetConfig.SelectPage selectPage5 = this.f31663c;
            if (selectPage5 != null) {
                iconPassport = selectPage5.getIconPassport();
            }
            iconPassport = null;
        }
        Object tag = eVar.f42480d.getTag(m4.f31389h0);
        if (tag instanceof View) {
            view = (View) tag;
        }
        if (view != null) {
            eVar.f42480d.removeView(view);
        }
        if (!this.f31666f) {
            eVar.f42480d.setVisibility(8);
            TextView label = eVar.f42481e;
            Intrinsics.checkNotNullExpressionValue(label, "label");
            label.setPaddingRelative(0, label.getPaddingTop(), label.getPaddingEnd(), label.getPaddingBottom());
        } else if (iconPassport != null) {
            ConstraintLayout iconContainer = eVar.f42480d;
            Intrinsics.checkNotNullExpressionValue(iconContainer, "iconContainer");
            eVar.f42480d.setTag(m4.f31389h0, nq.b.b(iconPassport, iconContainer, true));
            eVar.f42479c.setVisibility(8);
            TextView label2 = eVar.f42481e;
            Intrinsics.checkNotNullExpressionValue(label2, "label");
            label2.setPaddingRelative((int) sp.h.a(8.0d), label2.getPaddingTop(), label2.getPaddingEnd(), label2.getPaddingBottom());
        } else {
            eVar.f42479c.setVisibility(0);
            if (this.f31665e.get(Integer.valueOf(i10)) != null) {
                eVar.f42479c.setImageDrawable((Drawable) this.f31665e.get(Integer.valueOf(i10)));
            } else {
                int i13 = iArr[b0Var.a().ordinal()];
                if (i13 != 1) {
                    if (i13 != 2) {
                        if (i13 != 3) {
                            if (i13 == 4) {
                                i11 = l4.f31362i;
                            } else {
                                throw new rr.p();
                            }
                        } else {
                            i11 = l4.f31361h;
                        }
                    } else {
                        i11 = l4.f31357d;
                    }
                } else {
                    i11 = l4.f31364k;
                }
                Drawable b10 = g.a.b(eVar.getRoot().getContext(), i11);
                if (b10 != null) {
                    h(eVar, b10);
                    this.f31665e.put(Integer.valueOf(i10), eVar.f42479c.getDrawable());
                }
            }
            TextView label3 = eVar.f42481e;
            Intrinsics.checkNotNullExpressionValue(label3, "label");
            label3.setPaddingRelative((int) sp.h.a(8.0d), label3.getPaddingTop(), label3.getPaddingEnd(), label3.getPaddingBottom());
        }
        eVar.getRoot().setOnClickListener(new View.OnClickListener() { // from class: ko.s0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                t0.e(t0.this, b0Var, view2);
            }
        });
        eVar.getRoot().setEnabled(this.f31667g);
    }
}
