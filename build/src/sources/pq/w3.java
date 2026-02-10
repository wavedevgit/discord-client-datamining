package pq;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w3 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f43132a;

        static {
            int[] iArr = new int[LocalImage.Image.values().length];
            try {
                iArr[LocalImage.Image.START_HERO.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[LocalImage.Image.DOCUMENT_START_HERO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[LocalImage.Image.ANIMATED_CHECK.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[LocalImage.Image.FAILED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[LocalImage.Image.ID_FRONT_FAILED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[LocalImage.Image.ID_BACK_FAILED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[LocalImage.Image.SELFIE_FAILED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[LocalImage.Image.DOCUMENT_FAILED.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_START_HERO.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_SCAN_HERO.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_SCAN_READY_HERO.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_CHECK.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_BACK_CLOSED.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_FRONT_CLOSED.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_PHOTO_PAGE.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_ID_CARD.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_BACK_THEN_FRONT.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                iArr[LocalImage.Image.CREATE_PERSONA_CTA_CARD_ICON.ordinal()] = 18;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                iArr[LocalImage.Image.OPTION_CHECK_ICON.ordinal()] = 19;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                iArr[LocalImage.Image.OPTION_CHEVRON_ICON.ordinal()] = 20;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                iArr[LocalImage.Image.OPTION_FLAG_ICON.ordinal()] = 21;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                iArr[LocalImage.Image.OPTION_GLOBE_ICON.ordinal()] = 22;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                iArr[LocalImage.Image.OPTION_HOME_ICON.ordinal()] = 23;
            } catch (NoSuchFieldError unused23) {
            }
            try {
                iArr[LocalImage.Image.OPTION_ID_DOCUMENT_ICON.ordinal()] = 24;
            } catch (NoSuchFieldError unused24) {
            }
            try {
                iArr[LocalImage.Image.OPTION_ID_ICON.ordinal()] = 25;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                iArr[LocalImage.Image.OPTION_PHONE_ICON.ordinal()] = 26;
            } catch (NoSuchFieldError unused26) {
            }
            try {
                iArr[LocalImage.Image.OPTION_USER_ICON.ordinal()] = 27;
            } catch (NoSuchFieldError unused27) {
            }
            try {
                iArr[LocalImage.Image.REUSABLE_PERSONA_LOGO.ordinal()] = 28;
            } catch (NoSuchFieldError unused28) {
            }
            f43132a = iArr;
        }
    }

    public static final ViewBinding L(k2 k2Var, m5 uiComponentHelper, int i10, int i11, final String[] originalStrokeColors, final String[] originalFillColors, final LocalImage config) {
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(originalStrokeColors, "originalStrokeColors");
        Intrinsics.checkNotNullParameter(originalFillColors, "originalFillColors");
        Intrinsics.checkNotNullParameter(config, "config");
        if (config.getStyles() != null) {
            final dq.e c10 = dq.e.c(uiComponentHelper.b());
            c10.f21859b.setAnimation(i10);
            uiComponentHelper.d(new Function0() { // from class: pq.n3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit M;
                    M = w3.M(dq.e.this, config, originalStrokeColors, originalFillColors);
                    return M;
                }
            });
            Intrinsics.checkNotNull(c10);
            return c10;
        }
        final int dimension = (int) uiComponentHelper.a().getResources().getDimension(tp.c.f49779e);
        final dq.f c11 = dq.f.c(uiComponentHelper.b());
        c11.f21861b.setImageResource(i11);
        uiComponentHelper.d(new Function0() { // from class: pq.o3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N;
                N = w3.N(dq.f.this, dimension);
                return N;
            }
        });
        Intrinsics.checkNotNull(c11);
        return c11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M(dq.e eVar, LocalImage localImage, String[] strArr, String[] strArr2) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), strArr, strArr2, new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final View O(k2 k2Var, m5 uiComponentHelper, final LocalImage config) {
        dq.e eVar;
        final dq.f c10;
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        Context a10 = uiComponentHelper.a();
        final int dimension = (int) a10.getResources().getDimension(tp.c.f49775a);
        final int dimension2 = (int) a10.getResources().getDimension(tp.c.f49778d);
        LocalImage.Attributes attributes = config.getAttributes();
        LocalImage.Image imageKey = attributes != null ? attributes.getImageKey() : null;
        switch (imageKey == null ? -1 : a.f43132a[imageKey.ordinal()]) {
            case -1:
                eVar = null;
                break;
            case 0:
            default:
                throw new as.p();
            case 1:
                if (config.getStyles() != null) {
                    final dq.e c11 = dq.e.c(uiComponentHelper.b());
                    c11.f21859b.setAnimation(bq.o.f7418k);
                    uiComponentHelper.d(new Function0() { // from class: pq.l2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit P;
                            P = w3.P(dq.e.this, config);
                            return P;
                        }
                    });
                    Intrinsics.checkNotNull(c11);
                    eVar = c11;
                    break;
                } else {
                    c10 = dq.f.c(uiComponentHelper.b());
                    c10.f21861b.setImageResource(bq.l.f7383p);
                    uiComponentHelper.d(new Function0() { // from class: pq.n2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit c02;
                            c02 = w3.c0(dq.f.this, dimension);
                            return c02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 2:
                if (config.getStyles() != null) {
                    final dq.e c12 = dq.e.c(uiComponentHelper.b());
                    c12.f21859b.setAnimation(bq.o.f7409b);
                    uiComponentHelper.d(new Function0() { // from class: pq.z2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit n02;
                            n02 = w3.n0(dq.e.this, config);
                            return n02;
                        }
                    });
                    Intrinsics.checkNotNull(c12);
                    eVar = c12;
                    break;
                } else {
                    c10 = dq.f.c(uiComponentHelper.b());
                    c10.f21861b.setImageResource(bq.l.f7378k);
                    uiComponentHelper.d(new Function0() { // from class: pq.f3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit x02;
                            x02 = w3.x0(dq.f.this, dimension);
                            return x02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 3:
                final dq.e c13 = dq.e.c(uiComponentHelper.b());
                c13.f21859b.setAnimation(bq.o.f7419l);
                uiComponentHelper.d(new Function0() { // from class: pq.g3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q;
                        Q = w3.Q(dq.e.this);
                        return Q;
                    }
                });
                c13.f21859b.j(new l5.a0() { // from class: pq.i3
                    @Override // l5.a0
                    public final void a(l5.i iVar) {
                        w3.R(dq.e.this, iVar);
                    }
                });
                eVar = c13;
                break;
            case 4:
                if (config.getStyles() != null) {
                    final dq.e c14 = dq.e.c(uiComponentHelper.b());
                    c14.f21859b.setAnimation(bq.o.f7417j);
                    uiComponentHelper.d(new Function0() { // from class: pq.j3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit S;
                            S = w3.S(dq.e.this, config);
                            return S;
                        }
                    });
                    Intrinsics.checkNotNull(c14);
                    eVar = c14;
                    break;
                } else {
                    final dq.f c15 = dq.f.c(uiComponentHelper.b());
                    c15.f21861b.setImageResource(bq.l.f7382o);
                    uiComponentHelper.d(new Function0() { // from class: pq.k3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit T;
                            T = w3.T(dq.f.this, dimension2);
                            return T;
                        }
                    });
                    Intrinsics.checkNotNull(c15);
                    eVar = c15;
                    break;
                }
            case 5:
                if (config.getStyles() != null) {
                    final dq.e c16 = dq.e.c(uiComponentHelper.b());
                    c16.f21859b.setAnimation(bq.o.f7416i);
                    uiComponentHelper.d(new Function0() { // from class: pq.l3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit U;
                            U = w3.U(dq.e.this, config);
                            return U;
                        }
                    });
                    Intrinsics.checkNotNull(c16);
                    eVar = c16;
                    break;
                } else {
                    final dq.f c17 = dq.f.c(uiComponentHelper.b());
                    c17.f21861b.setImageResource(bq.l.f7381n);
                    uiComponentHelper.d(new Function0() { // from class: pq.m3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit V;
                            V = w3.V(dq.f.this, dimension2);
                            return V;
                        }
                    });
                    Intrinsics.checkNotNull(c17);
                    eVar = c17;
                    break;
                }
            case 6:
                if (config.getStyles() != null) {
                    final dq.e c18 = dq.e.c(uiComponentHelper.b());
                    c18.f21859b.setAnimation(bq.o.f7415h);
                    uiComponentHelper.d(new Function0() { // from class: pq.w2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit W;
                            W = w3.W(dq.e.this, config);
                            return W;
                        }
                    });
                    Intrinsics.checkNotNull(c18);
                    eVar = c18;
                    break;
                } else {
                    final dq.f c19 = dq.f.c(uiComponentHelper.b());
                    c19.f21861b.setImageResource(bq.l.f7380m);
                    uiComponentHelper.d(new Function0() { // from class: pq.h3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit X;
                            X = w3.X(dq.f.this, dimension2);
                            return X;
                        }
                    });
                    Intrinsics.checkNotNull(c19);
                    eVar = c19;
                    break;
                }
            case 7:
                if (config.getStyles() != null) {
                    final dq.e c20 = dq.e.c(uiComponentHelper.b());
                    c20.f21859b.setAnimation(bq.o.f7433z);
                    uiComponentHelper.d(new Function0() { // from class: pq.p3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Y;
                            Y = w3.Y(dq.e.this, config);
                            return Y;
                        }
                    });
                    Intrinsics.checkNotNull(c20);
                    eVar = c20;
                    break;
                } else {
                    final dq.f c21 = dq.f.c(uiComponentHelper.b());
                    c21.f21861b.setImageResource(bq.l.f7385r);
                    uiComponentHelper.d(new Function0() { // from class: pq.q3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = w3.Z(dq.f.this, dimension2);
                            return Z;
                        }
                    });
                    Intrinsics.checkNotNull(c21);
                    eVar = c21;
                    break;
                }
            case 8:
                if (config.getStyles() != null) {
                    final dq.e c22 = dq.e.c(uiComponentHelper.b());
                    c22.f21859b.setAnimation(bq.o.f7408a);
                    uiComponentHelper.d(new Function0() { // from class: pq.r3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit a02;
                            a02 = w3.a0(dq.e.this, config);
                            return a02;
                        }
                    });
                    Intrinsics.checkNotNull(c22);
                    eVar = c22;
                    break;
                } else {
                    c10 = dq.f.c(uiComponentHelper.b());
                    c10.f21861b.setImageResource(bq.l.f7377j);
                    uiComponentHelper.d(new Function0() { // from class: pq.s3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = w3.b0(dq.f.this, dimension);
                            return b02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 9:
                if (config.getStyles() != null) {
                    final dq.e c23 = dq.e.c(uiComponentHelper.b());
                    c23.f21859b.setAnimation(bq.o.f7432y);
                    uiComponentHelper.d(new Function0() { // from class: pq.t3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit d02;
                            d02 = w3.d0(dq.e.this, config);
                            return d02;
                        }
                    });
                    Intrinsics.checkNotNull(c23);
                    eVar = c23;
                    break;
                } else {
                    c10 = dq.f.c(uiComponentHelper.b());
                    c10.f21861b.setImageResource(bq.l.f7384q);
                    uiComponentHelper.d(new Function0() { // from class: pq.u3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit e02;
                            e02 = w3.e0(dq.f.this, dimension);
                            return e02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 10:
                final dq.e c24 = dq.e.c(uiComponentHelper.b());
                c24.f21859b.setAnimation(bq.o.f7430w);
                c24.f21859b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.v3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit f02;
                            f02 = w3.f0(dq.e.this, config);
                            return f02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView = c24.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
                    uq.g.g(lottieView, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), Integer.valueOf(bq.s.d(a10, bh.b.f6747m, null, false, 6, null)), null, new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: pq.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit g02;
                        g02 = w3.g0(dq.e.this);
                        return g02;
                    }
                });
                eVar = c24;
                break;
            case 11:
                final dq.e c25 = dq.e.c(uiComponentHelper.b());
                c25.f21859b.setAnimation(bq.o.f7431x);
                uiComponentHelper.d(new Function0() { // from class: pq.o2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit h02;
                        h02 = w3.h0(dq.e.this);
                        return h02;
                    }
                });
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.p2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit i02;
                            i02 = w3.i0(dq.e.this, config);
                            return i02;
                        }
                    });
                    eVar = c25;
                    break;
                } else {
                    ThemeableLottieAnimationView lottieView2 = c25.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView2, "lottieView");
                    uq.g.g(lottieView2, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), Integer.valueOf(bq.s.d(a10, bh.b.f6747m, null, false, 6, null)), null, new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
                    eVar = c25;
                    break;
                }
            case 12:
                final dq.e c26 = dq.e.c(uiComponentHelper.b());
                c26.f21859b.setAnimation(bq.o.f7429v);
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.q2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit j02;
                            j02 = w3.j0(dq.e.this, config);
                            return j02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView3 = c26.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView3, "lottieView");
                    uq.g.g(lottieView3, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), null, null, new String[]{"#280087"}, new String[0], new String[0]);
                }
                uiComponentHelper.d(new Function0() { // from class: pq.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit k02;
                        k02 = w3.k0(dq.e.this);
                        return k02;
                    }
                });
                eVar = c26;
                break;
            case 13:
                final dq.e c27 = dq.e.c(uiComponentHelper.b());
                c27.f21859b.setAnimation(bq.o.f7410c);
                c27.f21859b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.s2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit l02;
                            l02 = w3.l0(dq.e.this, config);
                            return l02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView4 = c27.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView4, "lottieView");
                    uq.g.g(lottieView4, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), Integer.valueOf(bq.s.d(a10, bh.b.f6747m, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: pq.t2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit m02;
                        m02 = w3.m0(dq.e.this);
                        return m02;
                    }
                });
                eVar = c27;
                break;
            case 14:
                final dq.e c28 = dq.e.c(uiComponentHelper.b());
                c28.f21859b.setAnimation(bq.o.f7412e);
                c28.f21859b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.u2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit o02;
                            o02 = w3.o0(dq.e.this, config);
                            return o02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView5 = c28.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView5, "lottieView");
                    uq.g.g(lottieView5, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), Integer.valueOf(bq.s.d(a10, bh.b.f6747m, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: pq.v2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p02;
                        p02 = w3.p0(dq.e.this);
                        return p02;
                    }
                });
                eVar = c28;
                break;
            case 15:
                final dq.e c29 = dq.e.c(uiComponentHelper.b());
                c29.f21859b.setAnimation(bq.o.f7414g);
                c29.f21859b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.x2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit q02;
                            q02 = w3.q0(dq.e.this, config);
                            return q02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView6 = c29.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView6, "lottieView");
                    uq.g.g(lottieView6, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), Integer.valueOf(bq.s.d(a10, bh.b.f6747m, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: pq.y2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit r02;
                        r02 = w3.r0(dq.e.this);
                        return r02;
                    }
                });
                eVar = c29;
                break;
            case 16:
                final dq.e c30 = dq.e.c(uiComponentHelper.b());
                c30.f21859b.setAnimation(bq.o.f7413f);
                c30.f21859b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.a3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit s02;
                            s02 = w3.s0(dq.e.this, config);
                            return s02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView7 = c30.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView7, "lottieView");
                    uq.g.g(lottieView7, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), Integer.valueOf(bq.s.d(a10, bh.b.f6747m, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: pq.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit t02;
                        t02 = w3.t0(dq.e.this);
                        return t02;
                    }
                });
                eVar = c30;
                break;
            case 17:
                final dq.e c31 = dq.e.c(uiComponentHelper.b());
                c31.f21859b.setAnimation(bq.o.f7411d);
                c31.f21859b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: pq.c3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit u02;
                            u02 = w3.u0(dq.e.this, config);
                            return u02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView8 = c31.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView8, "lottieView");
                    uq.g.g(lottieView8, Integer.valueOf(bq.s.d(a10, bh.b.f6745l, null, false, 6, null)), Integer.valueOf(bq.s.d(a10, bh.b.f6747m, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: pq.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v02;
                        v02 = w3.v0(dq.e.this);
                        return v02;
                    }
                });
                eVar = c31;
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                final dq.e c32 = dq.e.c(uiComponentHelper.b());
                c32.f21859b.setImageResource(nq.d.f38243a);
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView9 = c32.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView9, "lottieView");
                    uq.g.c(lottieView9, config.getStyles(), new String[0], new String[0], new String[0]);
                    eVar = c32;
                    break;
                } else {
                    uiComponentHelper.d(new Function0() { // from class: pq.e3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit w02;
                            w02 = w3.w0(dq.e.this);
                            return w02;
                        }
                    });
                    eVar = c32;
                    break;
                }
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7420m, bq.l.f7368a, new String[0], new String[0], config);
                break;
            case 20:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7421n, bq.l.f7369b, new String[]{"#000000"}, new String[0], config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7422o, bq.l.f7370c, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7423p, bq.l.f7371d, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 23:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7424q, bq.l.f7372e, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7425r, bq.l.f7373f, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7426s, bq.l.f7374g, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7427t, bq.l.f7375h, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 27:
                eVar = L(k2Var, uiComponentHelper, bq.o.f7428u, bq.l.f7376i, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 28:
                dq.e c33 = dq.e.c(uiComponentHelper.b());
                c33.f21859b.setImageResource(nq.d.f38247e);
                eVar = c33;
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView10 = c33.f21859b;
                    Intrinsics.checkNotNullExpressionValue(lottieView10, "lottieView");
                    uq.g.c(lottieView10, config.getStyles(), new String[0], new String[0], new String[0]);
                    eVar = c33;
                    break;
                }
                break;
        }
        if (eVar != null) {
            return eVar.getRoot();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(dq.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void R(dq.e eVar, l5.i iVar) {
        eVar.f21859b.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#4C4293"}, new String[]{"#B5B5CC"}, new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051", "#02214F"}, new String[]{"#AA84FF"}, new String[]{"#AA84FF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(dq.e eVar) {
        eVar.f21859b.setRepeatMode(1);
        eVar.f21859b.setRepeatCount(-1);
        eVar.f21859b.playAnimation();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(dq.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087"}, new String[0], new String[0]);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(dq.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(dq.e eVar) {
        eVar.f21859b.setRepeatMode(1);
        eVar.f21859b.setRepeatCount(-1);
        eVar.f21859b.playAnimation();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(dq.e eVar) {
        eVar.f21859b.setRepeatMode(1);
        eVar.f21859b.setRepeatCount(-1);
        eVar.f21859b.playAnimation();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(dq.e eVar) {
        eVar.f21859b.setRepeatMode(1);
        eVar.f21859b.setRepeatCount(-1);
        eVar.f21859b.playAnimation();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(dq.e eVar) {
        eVar.f21859b.setRepeatMode(1);
        eVar.f21859b.setRepeatCount(-1);
        eVar.f21859b.playAnimation();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(dq.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        uq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(dq.e eVar) {
        eVar.f21859b.setRepeatMode(1);
        eVar.f21859b.setRepeatCount(-1);
        eVar.f21859b.playAnimation();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(dq.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f21859b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = (int) bq.h.a(44.0d);
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(dq.f fVar, int i10) {
        ImageView imageView = fVar.f21861b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31987a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }
}
