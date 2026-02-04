package wr;

import java.io.File;
import java.util.ArrayDeque;
import java.util.Iterator;
import kotlin.io.FileWalkDirection;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final File f52663a;

    /* renamed from: b  reason: collision with root package name */
    private final FileWalkDirection f52664b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f52665c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f52666d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f52667e;

    /* renamed from: f  reason: collision with root package name */
    private final int f52668f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a extends c {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(File rootDir) {
            super(rootDir);
            Intrinsics.checkNotNullParameter(rootDir, "rootDir");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class b extends kotlin.collections.c {

        /* renamed from: i  reason: collision with root package name */
        private final ArrayDeque f52669i;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public final class a extends a {

            /* renamed from: b  reason: collision with root package name */
            private boolean f52671b;

            /* renamed from: c  reason: collision with root package name */
            private File[] f52672c;

            /* renamed from: d  reason: collision with root package name */
            private int f52673d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f52674e;

            /* renamed from: f  reason: collision with root package name */
            final /* synthetic */ b f52675f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(b bVar, File rootDir) {
                super(rootDir);
                Intrinsics.checkNotNullParameter(rootDir, "rootDir");
                this.f52675f = bVar;
            }

            @Override // wr.i.c
            public File b() {
                if (!this.f52674e && this.f52672c == null) {
                    Function1 function1 = i.this.f52665c;
                    if (function1 != null && !((Boolean) function1.invoke(a())).booleanValue()) {
                        return null;
                    }
                    File[] listFiles = a().listFiles();
                    this.f52672c = listFiles;
                    if (listFiles == null) {
                        Function2 function2 = i.this.f52667e;
                        if (function2 != null) {
                            function2.invoke(a(), new wr.a(a(), null, "Cannot list files in a directory", 2, null));
                        }
                        this.f52674e = true;
                    }
                }
                File[] fileArr = this.f52672c;
                if (fileArr != null) {
                    int i10 = this.f52673d;
                    Intrinsics.checkNotNull(fileArr);
                    if (i10 < fileArr.length) {
                        File[] fileArr2 = this.f52672c;
                        Intrinsics.checkNotNull(fileArr2);
                        int i11 = this.f52673d;
                        this.f52673d = i11 + 1;
                        return fileArr2[i11];
                    }
                }
                if (this.f52671b) {
                    Function1 function12 = i.this.f52666d;
                    if (function12 != null) {
                        function12.invoke(a());
                    }
                    return null;
                }
                this.f52671b = true;
                return a();
            }
        }

        /* renamed from: wr.i$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        private final class C0710b extends c {

            /* renamed from: b  reason: collision with root package name */
            private boolean f52676b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ b f52677c;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0710b(b bVar, File rootFile) {
                super(rootFile);
                Intrinsics.checkNotNullParameter(rootFile, "rootFile");
                this.f52677c = bVar;
            }

            @Override // wr.i.c
            public File b() {
                if (this.f52676b) {
                    return null;
                }
                this.f52676b = true;
                return a();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public final class c extends a {

            /* renamed from: b  reason: collision with root package name */
            private boolean f52678b;

            /* renamed from: c  reason: collision with root package name */
            private File[] f52679c;

            /* renamed from: d  reason: collision with root package name */
            private int f52680d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f52681e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(b bVar, File rootDir) {
                super(rootDir);
                Intrinsics.checkNotNullParameter(rootDir, "rootDir");
                this.f52681e = bVar;
            }

            /* JADX WARN: Code restructure failed: missing block: B:30:0x007e, code lost:
                if (r0.length == 0) goto L30;
             */
            @Override // wr.i.c
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public java.io.File b() {
                /*
                    r9 = this;
                    boolean r0 = r9.f52678b
                    r1 = 0
                    if (r0 != 0) goto L28
                    wr.i$b r0 = r9.f52681e
                    wr.i r0 = wr.i.this
                    kotlin.jvm.functions.Function1 r0 = wr.i.d(r0)
                    if (r0 == 0) goto L20
                    java.io.File r2 = r9.a()
                    java.lang.Object r0 = r0.invoke(r2)
                    java.lang.Boolean r0 = (java.lang.Boolean) r0
                    boolean r0 = r0.booleanValue()
                    if (r0 != 0) goto L20
                    return r1
                L20:
                    r0 = 1
                    r9.f52678b = r0
                    java.io.File r0 = r9.a()
                    return r0
                L28:
                    java.io.File[] r0 = r9.f52679c
                    if (r0 == 0) goto L47
                    int r2 = r9.f52680d
                    kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
                    int r0 = r0.length
                    if (r2 >= r0) goto L35
                    goto L47
                L35:
                    wr.i$b r0 = r9.f52681e
                    wr.i r0 = wr.i.this
                    kotlin.jvm.functions.Function1 r0 = wr.i.f(r0)
                    if (r0 == 0) goto L46
                    java.io.File r2 = r9.a()
                    r0.invoke(r2)
                L46:
                    return r1
                L47:
                    java.io.File[] r0 = r9.f52679c
                    if (r0 != 0) goto L92
                    java.io.File r0 = r9.a()
                    java.io.File[] r0 = r0.listFiles()
                    r9.f52679c = r0
                    if (r0 != 0) goto L76
                    wr.i$b r0 = r9.f52681e
                    wr.i r0 = wr.i.this
                    kotlin.jvm.functions.Function2 r0 = wr.i.e(r0)
                    if (r0 == 0) goto L76
                    java.io.File r2 = r9.a()
                    wr.a r3 = new wr.a
                    java.io.File r4 = r9.a()
                    r7 = 2
                    r8 = 0
                    r5 = 0
                    java.lang.String r6 = "Cannot list files in a directory"
                    r3.<init>(r4, r5, r6, r7, r8)
                    r0.invoke(r2, r3)
                L76:
                    java.io.File[] r0 = r9.f52679c
                    if (r0 == 0) goto L80
                    kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
                    int r0 = r0.length
                    if (r0 != 0) goto L92
                L80:
                    wr.i$b r0 = r9.f52681e
                    wr.i r0 = wr.i.this
                    kotlin.jvm.functions.Function1 r0 = wr.i.f(r0)
                    if (r0 == 0) goto L91
                    java.io.File r2 = r9.a()
                    r0.invoke(r2)
                L91:
                    return r1
                L92:
                    java.io.File[] r0 = r9.f52679c
                    kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
                    int r1 = r9.f52680d
                    int r2 = r1 + 1
                    r9.f52680d = r2
                    r0 = r0[r1]
                    return r0
                */
                throw new UnsupportedOperationException("Method not decompiled: wr.i.b.c.b():java.io.File");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class d {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f52682a;

            static {
                int[] iArr = new int[FileWalkDirection.values().length];
                try {
                    iArr[FileWalkDirection.f32546d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[FileWalkDirection.f32547e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f52682a = iArr;
            }
        }

        public b() {
            ArrayDeque arrayDeque = new ArrayDeque();
            this.f52669i = arrayDeque;
            if (i.this.f52663a.isDirectory()) {
                arrayDeque.push(e(i.this.f52663a));
            } else if (i.this.f52663a.isFile()) {
                arrayDeque.push(new C0710b(this, i.this.f52663a));
            } else {
                b();
            }
        }

        private final a e(File file) {
            int i10 = d.f52682a[i.this.f52664b.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return new a(this, file);
                }
                throw new lr.p();
            }
            return new c(this, file);
        }

        private final File f() {
            File b10;
            while (true) {
                c cVar = (c) this.f52669i.peek();
                if (cVar == null) {
                    return null;
                }
                b10 = cVar.b();
                if (b10 == null) {
                    this.f52669i.pop();
                } else if (Intrinsics.areEqual(b10, cVar.a()) || !b10.isDirectory() || this.f52669i.size() >= i.this.f52668f) {
                    break;
                } else {
                    this.f52669i.push(e(b10));
                }
            }
            return b10;
        }

        @Override // kotlin.collections.c
        protected void a() {
            File f10 = f();
            if (f10 != null) {
                c(f10);
            } else {
                b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* renamed from: a  reason: collision with root package name */
        private final File f52683a;

        public c(File root) {
            Intrinsics.checkNotNullParameter(root, "root");
            this.f52683a = root;
        }

        public final File a() {
            return this.f52683a;
        }

        public abstract File b();
    }

    private i(File file, FileWalkDirection fileWalkDirection, Function1 function1, Function1 function12, Function2 function2, int i10) {
        this.f52663a = file;
        this.f52664b = fileWalkDirection;
        this.f52665c = function1;
        this.f52666d = function12;
        this.f52667e = function2;
        this.f52668f = i10;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new b();
    }

    /* synthetic */ i(File file, FileWalkDirection fileWalkDirection, Function1 function1, Function1 function12, Function2 function2, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, (i11 & 2) != 0 ? FileWalkDirection.f32546d : fileWalkDirection, function1, function12, function2, (i11 & 32) != 0 ? Integer.MAX_VALUE : i10);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public i(File start, FileWalkDirection direction) {
        this(start, direction, null, null, null, 0, 32, null);
        Intrinsics.checkNotNullParameter(start, "start");
        Intrinsics.checkNotNullParameter(direction, "direction");
    }
}
