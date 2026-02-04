package aq;

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
        public static final /* synthetic */ int[] f6074a;

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
            f6074a = iArr;
        }
    }

    public static final ViewBinding L(k2 k2Var, m5 uiComponentHelper, int i10, int i11, final String[] originalStrokeColors, final String[] originalFillColors, final LocalImage config) {
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(originalStrokeColors, "originalStrokeColors");
        Intrinsics.checkNotNullParameter(originalFillColors, "originalFillColors");
        Intrinsics.checkNotNullParameter(config, "config");
        if (config.getStyles() != null) {
            final op.e c10 = op.e.c(uiComponentHelper.b());
            c10.f44401b.setAnimation(i10);
            uiComponentHelper.d(new Function0() { // from class: aq.n3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit M;
                    M = w3.M(op.e.this, config, originalStrokeColors, originalFillColors);
                    return M;
                }
            });
            Intrinsics.checkNotNull(c10);
            return c10;
        }
        final int dimension = (int) uiComponentHelper.a().getResources().getDimension(ep.c.f22480e);
        final op.f c11 = op.f.c(uiComponentHelper.b());
        c11.f44403b.setImageResource(i11);
        uiComponentHelper.d(new Function0() { // from class: aq.o3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N;
                N = w3.N(op.f.this, dimension);
                return N;
            }
        });
        Intrinsics.checkNotNull(c11);
        return c11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M(op.e eVar, LocalImage localImage, String[] strArr, String[] strArr2) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), strArr, strArr2, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final View O(k2 k2Var, m5 uiComponentHelper, final LocalImage config) {
        op.e eVar;
        final op.f c10;
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        Context a10 = uiComponentHelper.a();
        final int dimension = (int) a10.getResources().getDimension(ep.c.f22476a);
        final int dimension2 = (int) a10.getResources().getDimension(ep.c.f22479d);
        LocalImage.Attributes attributes = config.getAttributes();
        LocalImage.Image imageKey = attributes != null ? attributes.getImageKey() : null;
        switch (imageKey == null ? -1 : a.f6074a[imageKey.ordinal()]) {
            case -1:
                eVar = null;
                break;
            case 0:
            default:
                throw new lr.p();
            case 1:
                if (config.getStyles() != null) {
                    final op.e c11 = op.e.c(uiComponentHelper.b());
                    c11.f44401b.setAnimation(mp.o.f39018k);
                    uiComponentHelper.d(new Function0() { // from class: aq.l2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit P;
                            P = w3.P(op.e.this, config);
                            return P;
                        }
                    });
                    Intrinsics.checkNotNull(c11);
                    eVar = c11;
                    break;
                } else {
                    c10 = op.f.c(uiComponentHelper.b());
                    c10.f44403b.setImageResource(mp.l.f38983p);
                    uiComponentHelper.d(new Function0() { // from class: aq.n2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit c02;
                            c02 = w3.c0(op.f.this, dimension);
                            return c02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 2:
                if (config.getStyles() != null) {
                    final op.e c12 = op.e.c(uiComponentHelper.b());
                    c12.f44401b.setAnimation(mp.o.f39009b);
                    uiComponentHelper.d(new Function0() { // from class: aq.z2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit n02;
                            n02 = w3.n0(op.e.this, config);
                            return n02;
                        }
                    });
                    Intrinsics.checkNotNull(c12);
                    eVar = c12;
                    break;
                } else {
                    c10 = op.f.c(uiComponentHelper.b());
                    c10.f44403b.setImageResource(mp.l.f38978k);
                    uiComponentHelper.d(new Function0() { // from class: aq.f3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit x02;
                            x02 = w3.x0(op.f.this, dimension);
                            return x02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 3:
                final op.e c13 = op.e.c(uiComponentHelper.b());
                c13.f44401b.setAnimation(mp.o.f39019l);
                uiComponentHelper.d(new Function0() { // from class: aq.g3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q;
                        Q = w3.Q(op.e.this);
                        return Q;
                    }
                });
                c13.f44401b.j(new l5.z() { // from class: aq.i3
                    @Override // l5.z
                    public final void a(l5.i iVar) {
                        w3.R(op.e.this, iVar);
                    }
                });
                eVar = c13;
                break;
            case 4:
                if (config.getStyles() != null) {
                    final op.e c14 = op.e.c(uiComponentHelper.b());
                    c14.f44401b.setAnimation(mp.o.f39017j);
                    uiComponentHelper.d(new Function0() { // from class: aq.j3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit S;
                            S = w3.S(op.e.this, config);
                            return S;
                        }
                    });
                    Intrinsics.checkNotNull(c14);
                    eVar = c14;
                    break;
                } else {
                    final op.f c15 = op.f.c(uiComponentHelper.b());
                    c15.f44403b.setImageResource(mp.l.f38982o);
                    uiComponentHelper.d(new Function0() { // from class: aq.k3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit T;
                            T = w3.T(op.f.this, dimension2);
                            return T;
                        }
                    });
                    Intrinsics.checkNotNull(c15);
                    eVar = c15;
                    break;
                }
            case 5:
                if (config.getStyles() != null) {
                    final op.e c16 = op.e.c(uiComponentHelper.b());
                    c16.f44401b.setAnimation(mp.o.f39016i);
                    uiComponentHelper.d(new Function0() { // from class: aq.l3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit U;
                            U = w3.U(op.e.this, config);
                            return U;
                        }
                    });
                    Intrinsics.checkNotNull(c16);
                    eVar = c16;
                    break;
                } else {
                    final op.f c17 = op.f.c(uiComponentHelper.b());
                    c17.f44403b.setImageResource(mp.l.f38981n);
                    uiComponentHelper.d(new Function0() { // from class: aq.m3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit V;
                            V = w3.V(op.f.this, dimension2);
                            return V;
                        }
                    });
                    Intrinsics.checkNotNull(c17);
                    eVar = c17;
                    break;
                }
            case 6:
                if (config.getStyles() != null) {
                    final op.e c18 = op.e.c(uiComponentHelper.b());
                    c18.f44401b.setAnimation(mp.o.f39015h);
                    uiComponentHelper.d(new Function0() { // from class: aq.w2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit W;
                            W = w3.W(op.e.this, config);
                            return W;
                        }
                    });
                    Intrinsics.checkNotNull(c18);
                    eVar = c18;
                    break;
                } else {
                    final op.f c19 = op.f.c(uiComponentHelper.b());
                    c19.f44403b.setImageResource(mp.l.f38980m);
                    uiComponentHelper.d(new Function0() { // from class: aq.h3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit X;
                            X = w3.X(op.f.this, dimension2);
                            return X;
                        }
                    });
                    Intrinsics.checkNotNull(c19);
                    eVar = c19;
                    break;
                }
            case 7:
                if (config.getStyles() != null) {
                    final op.e c20 = op.e.c(uiComponentHelper.b());
                    c20.f44401b.setAnimation(mp.o.f39033z);
                    uiComponentHelper.d(new Function0() { // from class: aq.p3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Y;
                            Y = w3.Y(op.e.this, config);
                            return Y;
                        }
                    });
                    Intrinsics.checkNotNull(c20);
                    eVar = c20;
                    break;
                } else {
                    final op.f c21 = op.f.c(uiComponentHelper.b());
                    c21.f44403b.setImageResource(mp.l.f38985r);
                    uiComponentHelper.d(new Function0() { // from class: aq.q3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = w3.Z(op.f.this, dimension2);
                            return Z;
                        }
                    });
                    Intrinsics.checkNotNull(c21);
                    eVar = c21;
                    break;
                }
            case 8:
                if (config.getStyles() != null) {
                    final op.e c22 = op.e.c(uiComponentHelper.b());
                    c22.f44401b.setAnimation(mp.o.f39008a);
                    uiComponentHelper.d(new Function0() { // from class: aq.r3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit a02;
                            a02 = w3.a0(op.e.this, config);
                            return a02;
                        }
                    });
                    Intrinsics.checkNotNull(c22);
                    eVar = c22;
                    break;
                } else {
                    c10 = op.f.c(uiComponentHelper.b());
                    c10.f44403b.setImageResource(mp.l.f38977j);
                    uiComponentHelper.d(new Function0() { // from class: aq.s3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = w3.b0(op.f.this, dimension);
                            return b02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 9:
                if (config.getStyles() != null) {
                    final op.e c23 = op.e.c(uiComponentHelper.b());
                    c23.f44401b.setAnimation(mp.o.f39032y);
                    uiComponentHelper.d(new Function0() { // from class: aq.t3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit d02;
                            d02 = w3.d0(op.e.this, config);
                            return d02;
                        }
                    });
                    Intrinsics.checkNotNull(c23);
                    eVar = c23;
                    break;
                } else {
                    c10 = op.f.c(uiComponentHelper.b());
                    c10.f44403b.setImageResource(mp.l.f38984q);
                    uiComponentHelper.d(new Function0() { // from class: aq.u3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit e02;
                            e02 = w3.e0(op.f.this, dimension);
                            return e02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 10:
                final op.e c24 = op.e.c(uiComponentHelper.b());
                c24.f44401b.setAnimation(mp.o.f39030w);
                c24.f44401b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.v3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit f02;
                            f02 = w3.f0(op.e.this, config);
                            return f02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView = c24.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
                    fq.g.g(lottieView, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), Integer.valueOf(mp.s.d(a10, yg.b.f54099n, null, false, 6, null)), null, new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: aq.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit g02;
                        g02 = w3.g0(op.e.this);
                        return g02;
                    }
                });
                eVar = c24;
                break;
            case 11:
                final op.e c25 = op.e.c(uiComponentHelper.b());
                c25.f44401b.setAnimation(mp.o.f39031x);
                uiComponentHelper.d(new Function0() { // from class: aq.o2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit h02;
                        h02 = w3.h0(op.e.this);
                        return h02;
                    }
                });
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.p2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit i02;
                            i02 = w3.i0(op.e.this, config);
                            return i02;
                        }
                    });
                    eVar = c25;
                    break;
                } else {
                    ThemeableLottieAnimationView lottieView2 = c25.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView2, "lottieView");
                    fq.g.g(lottieView2, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), Integer.valueOf(mp.s.d(a10, yg.b.f54099n, null, false, 6, null)), null, new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
                    eVar = c25;
                    break;
                }
            case 12:
                final op.e c26 = op.e.c(uiComponentHelper.b());
                c26.f44401b.setAnimation(mp.o.f39029v);
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.q2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit j02;
                            j02 = w3.j0(op.e.this, config);
                            return j02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView3 = c26.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView3, "lottieView");
                    fq.g.g(lottieView3, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), null, null, new String[]{"#280087"}, new String[0], new String[0]);
                }
                uiComponentHelper.d(new Function0() { // from class: aq.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit k02;
                        k02 = w3.k0(op.e.this);
                        return k02;
                    }
                });
                eVar = c26;
                break;
            case 13:
                final op.e c27 = op.e.c(uiComponentHelper.b());
                c27.f44401b.setAnimation(mp.o.f39010c);
                c27.f44401b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.s2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit l02;
                            l02 = w3.l0(op.e.this, config);
                            return l02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView4 = c27.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView4, "lottieView");
                    fq.g.g(lottieView4, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), Integer.valueOf(mp.s.d(a10, yg.b.f54099n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: aq.t2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit m02;
                        m02 = w3.m0(op.e.this);
                        return m02;
                    }
                });
                eVar = c27;
                break;
            case 14:
                final op.e c28 = op.e.c(uiComponentHelper.b());
                c28.f44401b.setAnimation(mp.o.f39012e);
                c28.f44401b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.u2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit o02;
                            o02 = w3.o0(op.e.this, config);
                            return o02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView5 = c28.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView5, "lottieView");
                    fq.g.g(lottieView5, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), Integer.valueOf(mp.s.d(a10, yg.b.f54099n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: aq.v2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p02;
                        p02 = w3.p0(op.e.this);
                        return p02;
                    }
                });
                eVar = c28;
                break;
            case 15:
                final op.e c29 = op.e.c(uiComponentHelper.b());
                c29.f44401b.setAnimation(mp.o.f39014g);
                c29.f44401b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.x2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit q02;
                            q02 = w3.q0(op.e.this, config);
                            return q02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView6 = c29.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView6, "lottieView");
                    fq.g.g(lottieView6, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), Integer.valueOf(mp.s.d(a10, yg.b.f54099n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: aq.y2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit r02;
                        r02 = w3.r0(op.e.this);
                        return r02;
                    }
                });
                eVar = c29;
                break;
            case 16:
                final op.e c30 = op.e.c(uiComponentHelper.b());
                c30.f44401b.setAnimation(mp.o.f39013f);
                c30.f44401b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.a3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit s02;
                            s02 = w3.s0(op.e.this, config);
                            return s02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView7 = c30.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView7, "lottieView");
                    fq.g.g(lottieView7, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), Integer.valueOf(mp.s.d(a10, yg.b.f54099n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: aq.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit t02;
                        t02 = w3.t0(op.e.this);
                        return t02;
                    }
                });
                eVar = c30;
                break;
            case 17:
                final op.e c31 = op.e.c(uiComponentHelper.b());
                c31.f44401b.setAnimation(mp.o.f39011d);
                c31.f44401b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: aq.c3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit u02;
                            u02 = w3.u0(op.e.this, config);
                            return u02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView8 = c31.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView8, "lottieView");
                    fq.g.g(lottieView8, Integer.valueOf(mp.s.d(a10, yg.b.f54098m, null, false, 6, null)), Integer.valueOf(mp.s.d(a10, yg.b.f54099n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: aq.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v02;
                        v02 = w3.v0(op.e.this);
                        return v02;
                    }
                });
                eVar = c31;
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                final op.e c32 = op.e.c(uiComponentHelper.b());
                c32.f44401b.setImageResource(yp.d.f55158a);
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView9 = c32.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView9, "lottieView");
                    fq.g.c(lottieView9, config.getStyles(), new String[0], new String[0], new String[0]);
                    eVar = c32;
                    break;
                } else {
                    uiComponentHelper.d(new Function0() { // from class: aq.e3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit w02;
                            w02 = w3.w0(op.e.this);
                            return w02;
                        }
                    });
                    eVar = c32;
                    break;
                }
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39020m, mp.l.f38968a, new String[0], new String[0], config);
                break;
            case 20:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39021n, mp.l.f38969b, new String[]{"#000000"}, new String[0], config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39022o, mp.l.f38970c, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39023p, mp.l.f38971d, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 23:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39024q, mp.l.f38972e, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39025r, mp.l.f38973f, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39026s, mp.l.f38974g, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39027t, mp.l.f38975h, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 27:
                eVar = L(k2Var, uiComponentHelper, mp.o.f39028u, mp.l.f38976i, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 28:
                op.e c33 = op.e.c(uiComponentHelper.b());
                c33.f44401b.setImageResource(yp.d.f55162e);
                eVar = c33;
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView10 = c33.f44401b;
                    Intrinsics.checkNotNullExpressionValue(lottieView10, "lottieView");
                    fq.g.c(lottieView10, config.getStyles(), new String[0], new String[0], new String[0]);
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
    public static final Unit P(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(op.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void R(op.e eVar, l5.i iVar) {
        eVar.f44401b.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#4C4293"}, new String[]{"#B5B5CC"}, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051", "#02214F"}, new String[]{"#AA84FF"}, new String[]{"#AA84FF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(op.e eVar) {
        eVar.f44401b.setRepeatMode(1);
        eVar.f44401b.setRepeatCount(-1);
        eVar.f44401b.playAnimation();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(op.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087"}, new String[0], new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(op.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(op.e eVar) {
        eVar.f44401b.setRepeatMode(1);
        eVar.f44401b.setRepeatCount(-1);
        eVar.f44401b.playAnimation();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(op.e eVar) {
        eVar.f44401b.setRepeatMode(1);
        eVar.f44401b.setRepeatCount(-1);
        eVar.f44401b.playAnimation();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(op.e eVar) {
        eVar.f44401b.setRepeatMode(1);
        eVar.f44401b.setRepeatCount(-1);
        eVar.f44401b.playAnimation();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(op.e eVar) {
        eVar.f44401b.setRepeatMode(1);
        eVar.f44401b.setRepeatCount(-1);
        eVar.f44401b.playAnimation();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(op.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        fq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(op.e eVar) {
        eVar.f44401b.setRepeatMode(1);
        eVar.f44401b.setRepeatCount(-1);
        eVar.f44401b.playAnimation();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(op.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f44401b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = (int) mp.h.a(44.0d);
            lottieView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(op.f fVar, int i10) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }
}
