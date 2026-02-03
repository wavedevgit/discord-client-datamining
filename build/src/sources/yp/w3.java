package yp;

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
        public static final /* synthetic */ int[] f55116a;

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
            f55116a = iArr;
        }
    }

    public static final ViewBinding L(k2 k2Var, m5 uiComponentHelper, int i10, int i11, final String[] originalStrokeColors, final String[] originalFillColors, final LocalImage config) {
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(originalStrokeColors, "originalStrokeColors");
        Intrinsics.checkNotNullParameter(originalFillColors, "originalFillColors");
        Intrinsics.checkNotNullParameter(config, "config");
        if (config.getStyles() != null) {
            final mp.e c10 = mp.e.c(uiComponentHelper.b());
            c10.f39137b.setAnimation(i10);
            uiComponentHelper.d(new Function0() { // from class: yp.n3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit M;
                    M = w3.M(mp.e.this, config, originalStrokeColors, originalFillColors);
                    return M;
                }
            });
            Intrinsics.checkNotNull(c10);
            return c10;
        }
        final int dimension = (int) uiComponentHelper.a().getResources().getDimension(cp.c.f20634e);
        final mp.f c11 = mp.f.c(uiComponentHelper.b());
        c11.f39139b.setImageResource(i11);
        uiComponentHelper.d(new Function0() { // from class: yp.o3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N;
                N = w3.N(mp.f.this, dimension);
                return N;
            }
        });
        Intrinsics.checkNotNull(c11);
        return c11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M(mp.e eVar, LocalImage localImage, String[] strArr, String[] strArr2) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), strArr, strArr2, new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final View O(k2 k2Var, m5 uiComponentHelper, final LocalImage config) {
        mp.e eVar;
        final mp.f c10;
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        Context a10 = uiComponentHelper.a();
        final int dimension = (int) a10.getResources().getDimension(cp.c.f20630a);
        final int dimension2 = (int) a10.getResources().getDimension(cp.c.f20633d);
        LocalImage.Attributes attributes = config.getAttributes();
        LocalImage.Image imageKey = attributes != null ? attributes.getImageKey() : null;
        switch (imageKey == null ? -1 : a.f55116a[imageKey.ordinal()]) {
            case -1:
                eVar = null;
                break;
            case 0:
            default:
                throw new jr.p();
            case 1:
                if (config.getStyles() != null) {
                    final mp.e c11 = mp.e.c(uiComponentHelper.b());
                    c11.f39137b.setAnimation(kp.o.f36291k);
                    uiComponentHelper.d(new Function0() { // from class: yp.l2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit P;
                            P = w3.P(mp.e.this, config);
                            return P;
                        }
                    });
                    Intrinsics.checkNotNull(c11);
                    eVar = c11;
                    break;
                } else {
                    c10 = mp.f.c(uiComponentHelper.b());
                    c10.f39139b.setImageResource(kp.l.f36256p);
                    uiComponentHelper.d(new Function0() { // from class: yp.n2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit c02;
                            c02 = w3.c0(mp.f.this, dimension);
                            return c02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 2:
                if (config.getStyles() != null) {
                    final mp.e c12 = mp.e.c(uiComponentHelper.b());
                    c12.f39137b.setAnimation(kp.o.f36282b);
                    uiComponentHelper.d(new Function0() { // from class: yp.z2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit n02;
                            n02 = w3.n0(mp.e.this, config);
                            return n02;
                        }
                    });
                    Intrinsics.checkNotNull(c12);
                    eVar = c12;
                    break;
                } else {
                    c10 = mp.f.c(uiComponentHelper.b());
                    c10.f39139b.setImageResource(kp.l.f36251k);
                    uiComponentHelper.d(new Function0() { // from class: yp.f3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit x02;
                            x02 = w3.x0(mp.f.this, dimension);
                            return x02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 3:
                final mp.e c13 = mp.e.c(uiComponentHelper.b());
                c13.f39137b.setAnimation(kp.o.f36292l);
                uiComponentHelper.d(new Function0() { // from class: yp.g3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q;
                        Q = w3.Q(mp.e.this);
                        return Q;
                    }
                });
                c13.f39137b.j(new l5.z() { // from class: yp.i3
                    @Override // l5.z
                    public final void a(l5.i iVar) {
                        w3.R(mp.e.this, iVar);
                    }
                });
                eVar = c13;
                break;
            case 4:
                if (config.getStyles() != null) {
                    final mp.e c14 = mp.e.c(uiComponentHelper.b());
                    c14.f39137b.setAnimation(kp.o.f36290j);
                    uiComponentHelper.d(new Function0() { // from class: yp.j3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit S;
                            S = w3.S(mp.e.this, config);
                            return S;
                        }
                    });
                    Intrinsics.checkNotNull(c14);
                    eVar = c14;
                    break;
                } else {
                    final mp.f c15 = mp.f.c(uiComponentHelper.b());
                    c15.f39139b.setImageResource(kp.l.f36255o);
                    uiComponentHelper.d(new Function0() { // from class: yp.k3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit T;
                            T = w3.T(mp.f.this, dimension2);
                            return T;
                        }
                    });
                    Intrinsics.checkNotNull(c15);
                    eVar = c15;
                    break;
                }
            case 5:
                if (config.getStyles() != null) {
                    final mp.e c16 = mp.e.c(uiComponentHelper.b());
                    c16.f39137b.setAnimation(kp.o.f36289i);
                    uiComponentHelper.d(new Function0() { // from class: yp.l3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit U;
                            U = w3.U(mp.e.this, config);
                            return U;
                        }
                    });
                    Intrinsics.checkNotNull(c16);
                    eVar = c16;
                    break;
                } else {
                    final mp.f c17 = mp.f.c(uiComponentHelper.b());
                    c17.f39139b.setImageResource(kp.l.f36254n);
                    uiComponentHelper.d(new Function0() { // from class: yp.m3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit V;
                            V = w3.V(mp.f.this, dimension2);
                            return V;
                        }
                    });
                    Intrinsics.checkNotNull(c17);
                    eVar = c17;
                    break;
                }
            case 6:
                if (config.getStyles() != null) {
                    final mp.e c18 = mp.e.c(uiComponentHelper.b());
                    c18.f39137b.setAnimation(kp.o.f36288h);
                    uiComponentHelper.d(new Function0() { // from class: yp.w2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit W;
                            W = w3.W(mp.e.this, config);
                            return W;
                        }
                    });
                    Intrinsics.checkNotNull(c18);
                    eVar = c18;
                    break;
                } else {
                    final mp.f c19 = mp.f.c(uiComponentHelper.b());
                    c19.f39139b.setImageResource(kp.l.f36253m);
                    uiComponentHelper.d(new Function0() { // from class: yp.h3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit X;
                            X = w3.X(mp.f.this, dimension2);
                            return X;
                        }
                    });
                    Intrinsics.checkNotNull(c19);
                    eVar = c19;
                    break;
                }
            case 7:
                if (config.getStyles() != null) {
                    final mp.e c20 = mp.e.c(uiComponentHelper.b());
                    c20.f39137b.setAnimation(kp.o.f36306z);
                    uiComponentHelper.d(new Function0() { // from class: yp.p3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Y;
                            Y = w3.Y(mp.e.this, config);
                            return Y;
                        }
                    });
                    Intrinsics.checkNotNull(c20);
                    eVar = c20;
                    break;
                } else {
                    final mp.f c21 = mp.f.c(uiComponentHelper.b());
                    c21.f39139b.setImageResource(kp.l.f36258r);
                    uiComponentHelper.d(new Function0() { // from class: yp.q3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = w3.Z(mp.f.this, dimension2);
                            return Z;
                        }
                    });
                    Intrinsics.checkNotNull(c21);
                    eVar = c21;
                    break;
                }
            case 8:
                if (config.getStyles() != null) {
                    final mp.e c22 = mp.e.c(uiComponentHelper.b());
                    c22.f39137b.setAnimation(kp.o.f36281a);
                    uiComponentHelper.d(new Function0() { // from class: yp.r3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit a02;
                            a02 = w3.a0(mp.e.this, config);
                            return a02;
                        }
                    });
                    Intrinsics.checkNotNull(c22);
                    eVar = c22;
                    break;
                } else {
                    c10 = mp.f.c(uiComponentHelper.b());
                    c10.f39139b.setImageResource(kp.l.f36250j);
                    uiComponentHelper.d(new Function0() { // from class: yp.s3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = w3.b0(mp.f.this, dimension);
                            return b02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 9:
                if (config.getStyles() != null) {
                    final mp.e c23 = mp.e.c(uiComponentHelper.b());
                    c23.f39137b.setAnimation(kp.o.f36305y);
                    uiComponentHelper.d(new Function0() { // from class: yp.t3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit d02;
                            d02 = w3.d0(mp.e.this, config);
                            return d02;
                        }
                    });
                    Intrinsics.checkNotNull(c23);
                    eVar = c23;
                    break;
                } else {
                    c10 = mp.f.c(uiComponentHelper.b());
                    c10.f39139b.setImageResource(kp.l.f36257q);
                    uiComponentHelper.d(new Function0() { // from class: yp.u3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit e02;
                            e02 = w3.e0(mp.f.this, dimension);
                            return e02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 10:
                final mp.e c24 = mp.e.c(uiComponentHelper.b());
                c24.f39137b.setAnimation(kp.o.f36303w);
                c24.f39137b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.v3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit f02;
                            f02 = w3.f0(mp.e.this, config);
                            return f02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView = c24.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
                    dq.g.g(lottieView, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), Integer.valueOf(kp.s.d(a10, yg.b.f54344n, null, false, 6, null)), null, new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: yp.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit g02;
                        g02 = w3.g0(mp.e.this);
                        return g02;
                    }
                });
                eVar = c24;
                break;
            case 11:
                final mp.e c25 = mp.e.c(uiComponentHelper.b());
                c25.f39137b.setAnimation(kp.o.f36304x);
                uiComponentHelper.d(new Function0() { // from class: yp.o2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit h02;
                        h02 = w3.h0(mp.e.this);
                        return h02;
                    }
                });
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.p2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit i02;
                            i02 = w3.i0(mp.e.this, config);
                            return i02;
                        }
                    });
                    eVar = c25;
                    break;
                } else {
                    ThemeableLottieAnimationView lottieView2 = c25.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView2, "lottieView");
                    dq.g.g(lottieView2, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), Integer.valueOf(kp.s.d(a10, yg.b.f54344n, null, false, 6, null)), null, new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
                    eVar = c25;
                    break;
                }
            case 12:
                final mp.e c26 = mp.e.c(uiComponentHelper.b());
                c26.f39137b.setAnimation(kp.o.f36302v);
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.q2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit j02;
                            j02 = w3.j0(mp.e.this, config);
                            return j02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView3 = c26.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView3, "lottieView");
                    dq.g.g(lottieView3, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), null, null, new String[]{"#280087"}, new String[0], new String[0]);
                }
                uiComponentHelper.d(new Function0() { // from class: yp.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit k02;
                        k02 = w3.k0(mp.e.this);
                        return k02;
                    }
                });
                eVar = c26;
                break;
            case 13:
                final mp.e c27 = mp.e.c(uiComponentHelper.b());
                c27.f39137b.setAnimation(kp.o.f36283c);
                c27.f39137b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.s2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit l02;
                            l02 = w3.l0(mp.e.this, config);
                            return l02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView4 = c27.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView4, "lottieView");
                    dq.g.g(lottieView4, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), Integer.valueOf(kp.s.d(a10, yg.b.f54344n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: yp.t2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit m02;
                        m02 = w3.m0(mp.e.this);
                        return m02;
                    }
                });
                eVar = c27;
                break;
            case 14:
                final mp.e c28 = mp.e.c(uiComponentHelper.b());
                c28.f39137b.setAnimation(kp.o.f36285e);
                c28.f39137b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.u2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit o02;
                            o02 = w3.o0(mp.e.this, config);
                            return o02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView5 = c28.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView5, "lottieView");
                    dq.g.g(lottieView5, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), Integer.valueOf(kp.s.d(a10, yg.b.f54344n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: yp.v2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p02;
                        p02 = w3.p0(mp.e.this);
                        return p02;
                    }
                });
                eVar = c28;
                break;
            case 15:
                final mp.e c29 = mp.e.c(uiComponentHelper.b());
                c29.f39137b.setAnimation(kp.o.f36287g);
                c29.f39137b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.x2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit q02;
                            q02 = w3.q0(mp.e.this, config);
                            return q02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView6 = c29.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView6, "lottieView");
                    dq.g.g(lottieView6, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), Integer.valueOf(kp.s.d(a10, yg.b.f54344n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: yp.y2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit r02;
                        r02 = w3.r0(mp.e.this);
                        return r02;
                    }
                });
                eVar = c29;
                break;
            case 16:
                final mp.e c30 = mp.e.c(uiComponentHelper.b());
                c30.f39137b.setAnimation(kp.o.f36286f);
                c30.f39137b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.a3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit s02;
                            s02 = w3.s0(mp.e.this, config);
                            return s02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView7 = c30.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView7, "lottieView");
                    dq.g.g(lottieView7, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), Integer.valueOf(kp.s.d(a10, yg.b.f54344n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: yp.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit t02;
                        t02 = w3.t0(mp.e.this);
                        return t02;
                    }
                });
                eVar = c30;
                break;
            case 17:
                final mp.e c31 = mp.e.c(uiComponentHelper.b());
                c31.f39137b.setAnimation(kp.o.f36284d);
                c31.f39137b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: yp.c3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit u02;
                            u02 = w3.u0(mp.e.this, config);
                            return u02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView8 = c31.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView8, "lottieView");
                    dq.g.g(lottieView8, Integer.valueOf(kp.s.d(a10, yg.b.f54343m, null, false, 6, null)), Integer.valueOf(kp.s.d(a10, yg.b.f54344n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: yp.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v02;
                        v02 = w3.v0(mp.e.this);
                        return v02;
                    }
                });
                eVar = c31;
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                final mp.e c32 = mp.e.c(uiComponentHelper.b());
                c32.f39137b.setImageResource(wp.d.f52872a);
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView9 = c32.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView9, "lottieView");
                    dq.g.c(lottieView9, config.getStyles(), new String[0], new String[0], new String[0]);
                    eVar = c32;
                    break;
                } else {
                    uiComponentHelper.d(new Function0() { // from class: yp.e3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit w02;
                            w02 = w3.w0(mp.e.this);
                            return w02;
                        }
                    });
                    eVar = c32;
                    break;
                }
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36293m, kp.l.f36241a, new String[0], new String[0], config);
                break;
            case 20:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36294n, kp.l.f36242b, new String[]{"#000000"}, new String[0], config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36295o, kp.l.f36243c, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36296p, kp.l.f36244d, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 23:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36297q, kp.l.f36245e, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36298r, kp.l.f36246f, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36299s, kp.l.f36247g, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36300t, kp.l.f36248h, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 27:
                eVar = L(k2Var, uiComponentHelper, kp.o.f36301u, kp.l.f36249i, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 28:
                mp.e c33 = mp.e.c(uiComponentHelper.b());
                c33.f39137b.setImageResource(wp.d.f52876e);
                eVar = c33;
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView10 = c33.f39137b;
                    Intrinsics.checkNotNullExpressionValue(lottieView10, "lottieView");
                    dq.g.c(lottieView10, config.getStyles(), new String[0], new String[0], new String[0]);
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
    public static final Unit P(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(mp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void R(mp.e eVar, l5.i iVar) {
        eVar.f39137b.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#4C4293"}, new String[]{"#B5B5CC"}, new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051", "#02214F"}, new String[]{"#AA84FF"}, new String[]{"#AA84FF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(mp.e eVar) {
        eVar.f39137b.setRepeatMode(1);
        eVar.f39137b.setRepeatCount(-1);
        eVar.f39137b.playAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(mp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087"}, new String[0], new String[0]);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(mp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(mp.e eVar) {
        eVar.f39137b.setRepeatMode(1);
        eVar.f39137b.setRepeatCount(-1);
        eVar.f39137b.playAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(mp.e eVar) {
        eVar.f39137b.setRepeatMode(1);
        eVar.f39137b.setRepeatCount(-1);
        eVar.f39137b.playAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(mp.e eVar) {
        eVar.f39137b.setRepeatMode(1);
        eVar.f39137b.setRepeatCount(-1);
        eVar.f39137b.playAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(mp.e eVar) {
        eVar.f39137b.setRepeatMode(1);
        eVar.f39137b.setRepeatCount(-1);
        eVar.f39137b.playAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(mp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        dq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(mp.e eVar) {
        eVar.f39137b.setRepeatMode(1);
        eVar.f39137b.setRepeatCount(-1);
        eVar.f39137b.playAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(mp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f39137b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = (int) kp.h.a(44.0d);
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(mp.f fVar, int i10) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }
}
